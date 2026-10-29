import Link from 'next/link';

import { ArrowUp, Heart } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/tarekcodes62',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tarek-rahman1/',
    icon: FaLinkedinIn,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/md.tarek.rahman.94909',
    icon: FaFacebookF,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0e1729] px-5 text-white sm:px-8">
      <div className="mx-auto max-w-6xl py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo / Name */}
          <Link href="#home" className="text-2xl font-bold tracking-tight">
            Tarek<span className="text-emerald-400">.</span>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
              >
                <Icon size={18} />
              </a>
            ))}

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-slate-950 transition hover:bg-emerald-300"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Tarek Rahman. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made with{' '}
            <Heart size={15} className="fill-emerald-400 text-emerald-400" />{' '}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
