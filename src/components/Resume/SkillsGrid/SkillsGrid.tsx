import { SimpleGrid, Progress, Text, Paper } from '@mantine/core';
import styles from './SkillsGrid.module.css';
import { Skill } from '@/types/resume';
interface SkillsGridProps {
  skills: Skill[];
  category: string;
}

export const SkillsGrid = ({ skills, category }: SkillsGridProps) => {
  return (
    <div className={styles.container}>
      <Text size="xl" fw={500} mb="md">
        {category}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {skills.map((skill) => (
          <Paper key={skill.name} p="md" withBorder>
            <Text size="sm" mb={8}>
              {skill.name}
            </Text>
            <Progress
              value={skill.level * 20}
              color="blue"
              size="sm"
              radius="xl"
            />
          </Paper>
        ))}
      </SimpleGrid>
    </div>
  );
}; 