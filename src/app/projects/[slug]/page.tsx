import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#131c2f] px-6 py-16 text-white">
      <article className="mx-auto max-w-4xl">
        <Link href="/projects" className="text-emerald-400 hover:underline">
          ← Back to Projects
        </Link>

        <h1 className="mt-8 text-3xl font-bold md:text-5xl">{project.name}</h1>

        <p className="mt-4 text-lg leading-8 text-gray-300">
          {project.description}
        </p>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Challenges Faced</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-300">
            {project.challenges.map(challenge => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-300">
            {project.improvements.map(improvement => (
              <li key={improvement}>{improvement}</li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-gray-950 hover:bg-emerald-300"
          >
            View Live Project ↗
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:border-emerald-400"
          >
            GitHub Repository ↗
          </a>
        </div>
      </article>
    </main>
  );
}
