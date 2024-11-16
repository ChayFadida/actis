# Stage 1: Building the code
FROM node:18-alpine AS builder

WORKDIR /app

# Define build arguments
ARG RESEND_API_KEY
ARG CONTACT_EMAIL

# Set environment variables
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV CONTACT_EMAIL=$CONTACT_EMAIL

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy necessary files
COPY next.config.mjs .
COPY tsconfig.json .
COPY public ./public
COPY src ./src

# Create .env file from build arguments
RUN echo "RESEND_API_KEY=$RESEND_API_KEY" > .env && \
    echo "CONTACT_EMAIL=$CONTACT_EMAIL" >> .env

# Build the application
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build

# Stage 2: Run the built code
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env ./.env

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"] 