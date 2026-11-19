import ProjectCard from './ProjectCard';
import type { Project } from '@/lib/projects-db';

type ProjectListItem = Pick<
  Project,
  'title' | 'description' | 'technologies' | 'link'
> &
  Partial<Pick<Project, 'id' | 'type'>>;

interface ProjectListProps {
  projects: ProjectListItem[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id ?? project.title} {...project} />
      ))}
    </section>
  );
}