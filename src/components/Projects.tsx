import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#131c2f] px-6 py-20 text-white md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-medium text-emerald-400">MY WORK</p>
          <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A selection of projects that demonstrate my skills in frontend and
            full-stack web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0e1729] transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 font-medium text-gray-950 transition hover:bg-emerald-300"
                >
                  View Details
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
