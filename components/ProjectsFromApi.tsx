'use client';

import { useEffect, useState } from 'react';
import ProjectList from '@/components/ProjectList';
import type { Project } from '@/lib/projects-db';

export default function ProjectsFromApi({
  type,
}: {
  type?: Project['type'];
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const query = type ? `?type=${type}` : '';

    async function loadProjects() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/projects${query}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Unable to load projects (${response.status})`);
        }

        const data: Project[] = await response.json();
        setProjects(data);
      } catch (fetchError) {
        if (fetchError instanceof Error && fetchError.name !== 'AbortError') {
          setError(fetchError.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadProjects();

    return () => controller.abort();
  }, [type]);

  if (isLoading) {
    return <p role="status">Loading projects...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return <ProjectList projects={projects} />;
}
