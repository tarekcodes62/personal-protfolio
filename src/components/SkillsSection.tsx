'use client';

import { Layers } from 'lucide-react';
import { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiShadcnui,
  SiDaisyui,
} from 'react-icons/si';

const categories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST API', icon: FaNodeJs, color: '#68A063' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'VS Code', icon: FaReact, color: '#007ACC' },
    ],
  },

  {
    name: 'Technologies',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'shadcn/ui', icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'HeroUI', icon: Layers, color: '#A78BFA' },
      { name: 'DaisyUI', icon: SiDaisyui, color: '#5A0EF8' },
    ],
  },

  {
    name: 'Hosting',
    skills: [
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const selectedCategory = categories.find(
    category => category.name === activeCategory,
  )!;

  const totalTechnologies = new Set(
    categories.flatMap(category => category.skills.map(skill => skill.name)),
  ).size;

  return (
    <section id="skills" className="min-h-screen px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm tracking-[0.2em] text-emerald-400">
            MY ARSENAL
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Technical Skills
          </h2>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-emerald-500" />
        </div>

        {/* Category Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-slate-700 bg-slate-800/70 text-slate-400 hover:border-emerald-500 hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 opacity-70">{category.skills.length}</span>
            </button>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {selectedCategory.skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="group flex min-h-36 flex-col items-center justify-center rounded-[20px] border border-slate-700/70 bg-[#0e1729] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/60 hover:bg-slate-800"
              >
                <Icon
                  size={38}
                  style={{ color: skill.color }}
                  className="mb-5 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-center text-sm font-semibold text-slate-400 transition-colors group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Statistics */}
        <div className="mt-24 flex flex-wrap items-center justify-center gap-8 text-center font-mono text-sm text-slate-400 sm:gap-12">
          <p>
            <span className="text-white">{categories.length}</span> Categories
          </p>

          <p>
            <span className="text-white">{totalTechnologies}</span> Technologies
          </p>
        </div>
      </div>
    </section>
  );
}
