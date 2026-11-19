import ProjectsFromApi from '@/components/ProjectsFromApi';

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg text-gray-700">
        Explore my open-source and school projects.
      </p>
      <ProjectsFromApi />
    </main>
  );
}
