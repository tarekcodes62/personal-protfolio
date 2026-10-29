import { Code2, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing readable, maintainable, and efficient code.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Turning complex challenges into simple solutions.',
  },
  {
    icon: Rocket,
    title: 'Continuous Growth',
    description: 'Learning new technologies and improving every day.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-emerald-400" />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:items-start">
          {/* About Content */}
          <div>
            <h3 className="mb-5 text-2xl font-bold md:text-3xl">
              Hi, I&apos;m Tarek Rahman 👋
            </h3>

            <p className="mb-4 leading-8 text-slate-300">
              I&apos;m a passionate Full Stack Web Developer from Bangladesh who
              enjoys building modern, responsive, and user-friendly web
              applications that solve real-world problems.
            </p>

            <p className="mb-4 leading-8 text-slate-300">
              My programming journey began with curiosity about how websites
              work and how technology can solve real-world problems. As I
              explored web development, I started building projects and learning
              how to create interactive user interfaces, develop backend APIs,
              and manage databases. With every project, I continue to improve my
              problem-solving skills and explore new technologies.
            </p>

            <p className="mb-4 leading-8 text-slate-300">
              I enjoy building full-stack applications, creating clean and
              intuitive user interfaces, designing reliable backend systems, and
              learning modern development tools. My primary technologies include
              JavaScript, TypeScript, React, Next.js, Node.js, Express.js, and
              MongoDB. I believe great software is not just about writing
              code—it is about understanding users&apos; needs and creating
              solutions that are useful, accessible, and scalable.
            </p>

            <p className="leading-8 text-slate-300">
              Outside programming, I enjoy exploring new technologies, learning
              new skills, reading technical articles, and discovering creative
              ideas that inspire me to grow. I&apos;m naturally curious, love
              taking on challenges, and believe that consistency and continuous
              learning are the keys to becoming a better developer.
            </p>
            <p className="leading-8 text-slate-300">
              My goal is to grow as a developer, collaborate with talented
              people, contribute to meaningful projects, and build digital
              experiences that make a positive difference. I&apos;m always
              excited to learn, share knowledge, and turn new ideas into
              reality.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-5">
            {highlights.map(item => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h4 className="mb-2 text-lg font-semibold">{item.title}</h4>

                    <p className="leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
