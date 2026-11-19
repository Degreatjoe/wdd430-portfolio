import { getProjects, type Project } from '@/lib/projects-db';

const projectTypes: Project['type'][] = ['opensource', 'school'];

export function GET(request: Request) {
  const type = new URL(request.url).searchParams.get('type');
  const projectType = projectTypes.find((candidate) => candidate === type);

  if (type && !projectType) {
    return Response.json({ error: 'Invalid project type' }, { status: 400 });
  }

  return Response.json(getProjects(projectType));
}
