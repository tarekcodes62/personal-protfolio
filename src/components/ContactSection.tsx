import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    title: 'Email Address',
    value: 'mdtarekr199@gamil.com',
    href: 'mailto:mdtarekr199@gamil.com',
    icon: Mail,
    description: 'Send me an email anytime',
  },
  {
    title: 'Phone Number',
    value: '+880 1789796062',
    href: 'tel:+880189796062',
    icon: Phone,
    description: 'Give me a call',
  },
  {
    title: 'WhatsApp',
    value: '+880 1789796062',
    href: 'https://wa.me/8801789796062',
    icon: MessageCircle,
    description: "Let's chat on WhatsApp",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#131c2f] px-5 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-sm tracking-[0.2em] text-emerald-400">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Contact <span className="text-emerald-400">Me</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-emerald-500" />

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Have a project idea, a job opportunity, or just want to say hello?
            Feel free to reach out. I&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {contactInfo.map(item => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === 'WhatsApp' ? '_blank' : undefined}
                rel={
                  item.title === 'WhatsApp' ? 'noopener noreferrer' : undefined
                }
                className="group rounded-2xl border border-slate-700/70 bg-[#0e1729] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-slate-950">
                  <Icon size={24} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

                <p className="mb-3 wrap-break-word text-sm text-emerald-400">
                  {item.value}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm text-slate-400">{item.description}</p>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-slate-500 transition group-hover:text-emerald-400"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Available for exciting opportunities and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
