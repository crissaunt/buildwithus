import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: 'Aldren Castillo',
      role: 'CEO & Lead Developer',
      bio: 'Architects core database systems, coordinates full-stack engineering, and handles corporate client requirements.',
      avatarBg: 'bg-editorial-red',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:aldren@buildwithus.com',
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-ink">
          {/* Stylized face avatar: Lead Dev */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M30 65 Q50 85 70 65" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Eyeglasses */}
          <circle cx="40" cy="45" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="60" cy="45" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <line x1="50" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="3" />
          <line x1="30" y1="45" x2="20" y2="45" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="2" />
          {/* Hair spikes */}
          <path d="M35 15 L40 25 M50 12 L50 24 M65 15 L60 25" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: 'Riza Melle',
      role: 'Frontend Developer',
      bio: 'Designs component systems, manages stylesheet animations, and implements dynamic mobile-first interactions.',
      avatarBg: 'bg-editorial-pink',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:riza@buildwithus.com',
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-ink">
          {/* Stylized face avatar: Frontend Dev */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M35 68 Q50 78 65 68" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Eyes */}
          <circle cx="38" cy="48" r="4" fill="currentColor" />
          <circle cx="62" cy="48" r="4" fill="currentColor" />
          {/* Eyelashes / Wink */}
          <path d="M32 40 Q38 35 44 40" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M56 40 Q62 35 68 40" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Hair loop */}
          <path d="M20 35 Q15 60 25 70 M80 35 Q85 60 75 70" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M25 25 C40 10, 60 10, 75 25" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: 'Danilo Cruz',
      role: 'Backend Developer',
      bio: 'Structures servers, maintains cloud deployments, configures APIs, and secures core backend data pipelines.',
      avatarBg: 'bg-editorial-violet',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:danilo@buildwithus.com',
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-ink">
          {/* Stylized face avatar: Backend Dev */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M35 65 Q50 70 65 65" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Beard / Goatee */}
          <path d="M35 65 L40 85 L60 85 L65 65 Z" className="fill-neutral-300" stroke="currentColor" strokeWidth="2" />
          {/* Serious eyes */}
          <line x1="32" y1="42" x2="44" y2="42" stroke="currentColor" strokeWidth="3" />
          <line x1="56" y1="42" x2="68" y2="42" stroke="currentColor" strokeWidth="3" />
          <circle cx="38" cy="48" r="3" fill="currentColor" />
          <circle cx="62" cy="48" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Cheska Alaba',
      role: 'Marketing Lead',
      bio: 'Analyzes user metrics, outlines SEO strategies, drafts marketing copies, and manages client onboarding.',
      avatarBg: 'bg-editorial-yellow',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:cheska@buildwithus.com',
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-ink">
          {/* Stylized face avatar: Marketing Lead */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M32 63 Q50 82 68 63" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Eyes */}
          <circle cx="38" cy="44" r="3" fill="currentColor" />
          <circle cx="62" cy="44" r="3" fill="currentColor" />
          {/* Friendly cheeks */}
          <circle cx="30" cy="54" r="5" className="fill-editorial-red opacity-30" />
          <circle cx="70" cy="54" r="5" className="fill-editorial-red opacity-30" />
          {/* Big Ribbon/Bow on head */}
          <path d="M35 12 L50 20 L65 12 L60 25 L40 25 Z" className="fill-editorial-pink" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="team" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
          [ SECTION 04: AGENCY STAFF DIRECTORY ]
        </span>
        <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
          MEET THE ENGINEERS
        </h3>
        <p className="font-body text-neutral-600 mt-2 max-w-xl">
          Four distinct minds operating synchronously in Caraga to deliver high-octane digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <div
            key={member.name}
            className="border-2 border-ink bg-paper p-6 relative flex flex-col justify-between transition-all duration-300 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-hard card-wiggle group"
          >
            {/* Halftone placeholder container */}
            <div className="border border-ink aspect-square w-full flex items-center justify-center relative bg-neutral-200 overflow-hidden mb-6">
              {/* Halftone mesh grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] opacity-10 [background-size:8px_8px] z-10" />
              
              {/* Rotating background shape */}
              <div className={`absolute w-36 h-36 border border-ink ${member.avatarBg} opacity-20 transform -rotate-12 group-hover:rotate-45 transition-transform duration-500`} />
              
              <div className="z-20 transform group-hover:scale-110 transition-transform duration-300">
                {member.avatarSvg}
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] tracking-widest text-editorial-red font-bold uppercase block mb-1">
                {member.role}
              </span>
              <h4 className="font-sans font-black text-lg text-ink uppercase tracking-wide mb-3">
                {member.name}
              </h4>
              <p className="font-body text-xs md:text-sm text-neutral-700 leading-relaxed mb-6">
                {member.bio}
              </p>
            </div>

            {/* Social Anchor Buttons */}
            <div className="pt-4 border-t border-dashed border-neutral-200 flex items-center gap-3">
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-all select-none"
                aria-label={`${member.name} GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-all select-none"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={member.email}
                className="w-8 h-8 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-all select-none"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
