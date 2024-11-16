import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const RATE_LIMIT_DURATION = 60 * 60 * 1000;
const MAX_REQUESTS = 5;
const ipRequests = new Map<string, { count: number; timestamp: number }>();

const ContactSchema = z.object({
  name: z.string()
    .min(2, 'שם חייב להכיל לפחות 2 תווים')
    .max(100, 'שם ארוך מדי')
    .regex(/^[\u0590-\u05FFa-zA-Z\s]+$/, 'שם יכול להכיל רק אותיות בעברית ובאנגלית'),
  
  email: z.string()
    .email('כתובת אימייל לא תקינה')
    .max(100, 'כתובת אימייל ארוכה מדי')
    .toLowerCase(),
  
  phone: z.string()
    .regex(/^05\d{8}$/, 'מספר טלפון לא תקין')
    .or(z.string().regex(/^0[23489]\d{7}$/, 'מספר טלפון לא תקין')),
  
  service: z.enum(['cleaning', 'transport', 'moving', 'other'], {
    errorMap: () => ({ message: 'נא לבחור שירות מהרשימה' }),
  }),
  
  message: z.string()
    .min(10, 'ההודעה חייבת להכיל לפחות 10 תווים')
    .max(1000, 'ההודעה ארוכה מדי')
    .regex(/^[^<>{}]*$/, 'ההודעה מכילה תווים לא חוקיים'),
});

const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const userRequests = ipRequests.get(ip);

  if (!userRequests) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - userRequests.timestamp > RATE_LIMIT_DURATION) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (userRequests.count >= MAX_REQUESTS) {
    return false;
  }

  userRequests.count += 1;
  return true;
};

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.CONTACT_EMAIL) {
  throw new Error('CONTACT_EMAIL environment variable is not set');
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'נא לנסות שוב מאוחר יותר' },
        { status: 429 }
      );
    }

    const body = await request.json();

    const validatedData = ContactSchema.parse(body);

    const sanitizedData = {
      ...validatedData,
      name: sanitizeInput(validatedData.name),
      message: sanitizeInput(validatedData.message),
    };

    const serviceMap: Record<string, string> = {
      cleaning: 'שירותי ניקיון',
      transport: 'שירותי הסעות',
      moving: 'שירותי הובלות',
      other: 'אחר',
    };

    const data = await resend.emails.send({
      from: 'Actis Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL as string],
      subject: `פנייה חדשה מהאתר: ${serviceMap[sanitizedData.service]}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2 style="color: #2f3136;">פנייה חדשה מהאתר</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>שם:</strong> ${sanitizedData.name}</p>
            <p><strong>טלפון:</strong> ${sanitizedData.phone}</p>
            <p><strong>אימייל:</strong> ${sanitizedData.email}</p>
            <p><strong>שירות:</strong> ${serviceMap[sanitizedData.service]}</p>
            <p><strong>הודעה:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            נשלח מ-IP: ${ip}<br>
            תאריך: ${new Date().toLocaleString('he-IL')}
          </p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'נתונים לא תקינים', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'שגיאה בשליחת הטופס' },
      { status: 500 }
    );
  }
} 