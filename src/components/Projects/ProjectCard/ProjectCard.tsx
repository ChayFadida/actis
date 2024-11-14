import { Card, Image, Text, Badge, Group, Button } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import styles from './ProjectCard.module.css';
import { Project } from '@/types/project';
interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.card}>
      {project.image && (
        <Card.Section>
          <Image
            src={project.image}
            height={160}
            alt={project.name}
          />
        </Card.Section>
      )}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="lg">{project.name}</Text>
        <Badge color="blue">{project.language}</Badge>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        {project.description}
      </Text>

      <Group gap={8} mt="auto">
        {project.topics.map((topic) => (
          <Badge key={topic} variant="light" size="sm">
            {topic}
          </Badge>
        ))}
      </Group>

      <Group mt="md">
        <Button
          variant="light"
          size="xs"
          leftSection={<IconBrandGithub size={16} />}
          component="a"
          href={project.html_url}
          target="_blank"
        >
          View Source
        </Button>
        {project.demo_url && (
          <Button
            variant="light"
            size="xs"
            leftSection={<IconExternalLink size={16} />}
            component="a"
            href={project.demo_url}
            target="_blank"
          >
            Live Demo
          </Button>
        )}
      </Group>
    </Card>
  );
}; 