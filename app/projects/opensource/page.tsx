import ProjectsFromApi from '@/components/ProjectsFromApi';

export default function OpenSourceProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>
      <p className="text-lg text-gray-700">
        Projects I have built and shared with the open-source community.
      </p>
      <ProjectsFromApi type="opensource" />
    </main>
  );
}
