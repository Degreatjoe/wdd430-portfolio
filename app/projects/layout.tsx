import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav
        aria-label="Projects"
        className="max-w-4xl mx-auto px-4 flex flex-wrap gap-6 border-b border-gray-200 py-4"
      >
        <Link href="/projects" className="text-blue-600 hover:underline">
          Overview
        </Link>
        <Link href="/projects/opensource" className="text-blue-600 hover:underline">
          Open Source
        </Link>
        <Link href="/projects/school" className="text-blue-600 hover:underline">
          School
        </Link>
        <Link href="/projects/settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>
      {children}
    </section>
  );
}
