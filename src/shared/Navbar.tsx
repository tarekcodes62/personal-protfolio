'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string) =>
    `relative pb-2 font-semibold transition-colors duration-200 ${
      isActive(href)
        ? 'text-emerald-500 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-emerald-500'
        : 'text-gray-300 hover:text-emerald-500'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111827] text-white">
      <nav className="mx-auto flex min-h-16 max-w-[1920px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={e => {
            setIsOpen(false);

            if (pathname === '/') {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          }}
          className="shrink-0 text-3xl font-extrabold tracking-tight"
          aria-label="Tarek home"
        >
          Tarek<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={linkClass(link.href)}
            >
              {link.name === 'Home' ? link.name : `/${link.name}`}
            </Link>
          ))}
        </div>

        {/* Desktop action */}
        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <div className="h-12 w-px bg-white/15" />

          <Link
            href="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            className="rounded-xl border-2 border-emerald-500 px-7 py-2 font-medium text-emerald-500 transition hover:bg-emerald-500 hover:text-white"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(previous => !previous)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 transition hover:bg-emerald-500/10 lg:hidden"
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-semibold transition ${
                  isActive(link.href)
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
