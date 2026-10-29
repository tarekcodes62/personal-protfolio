'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

import { Download, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tarek-rahman1/',
    icon: FaLinkedinIn,
    color: 'bg-sky-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tarekcodes62',
    icon: FaGithub,
    color: 'bg-gray-800',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/md.tarek.rahman.94909',
    icon: FaFacebookF,
    color: 'bg-blue-600',
  },
];

export default function HeroSection() {
  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));

          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          if (text.length === 1) {
            setIsDeleting(false);
            setRoleIndex(prev => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-76px)] items-center text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20 lg:py-20">
        {/* Hero Content */}
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-xl font-semibold text-slate-400 sm:text-2xl">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-emerald-500 sm:text-5xl md:text-6xl xl:text-7xl">
            Tarek Rahman
          </h1>

          <h2 className="text-xl font-medium text-slate-400 sm:text-2xl md:text-3xl flex gap-4">
            <span>A</span> {text}
            <span className="animate-pulse text-emerald-500">|</span>
          </h2>

          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Passionate about building modern and scalable web applications. I
            specialize in React, Next.js, Node.js, Express.js, and MongoDB,
            turning ideas into responsive, user-friendly digital experiences
            with clean code and thoughtful design.
          </p>

          {/* Social Links and Resume */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {socialLinks.map(({ name, href, icon: Icon, color }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={`${color} flex h-12 w-12 items-center justify-center rounded-xl text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:ring-2 hover:ring-emerald-400`}
              >
                <Icon size={24} />
              </Link>
            ))}

            <Link
              href="/"
              title="mdtarekr199@gmail.com"
              aria-label="Contact me"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white transition hover:-translate-y-1 hover:bg-amber-400"
            >
              <Mail size={23} />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-400"
            >
              <Download size={22} />
              Resume
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl">
            <Image
              src="/images/profile.png"
              alt="Tarek Rahman - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 1024px) 85vw, 40vw"
              className="object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
