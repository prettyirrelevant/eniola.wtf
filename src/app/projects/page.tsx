import { ProjectCard } from '@/components/project-card';
import { ScrambleText } from '@/components/scramble-text';
import type { Metadata } from 'next';

const projects = [
  {
    title: 'neuron',
    description:
      "students' attendance system using bluetooth low energy(ble) with esp32",
    role: 'creator and maintainer',
    period: 'aug 2024',
    achievements: [
      'built cross-platform mobile application',
      'implemented ble-based attendance tracking system',
      'developed secure attendance verification protocol',
    ],
    technologies: ['typescript', 'c++', 'react native', 'platformio'],
    href: 'https://github.com/prettyirrelevant/final-year-project',
  },
  {
    title: 'wrapped-naira',
    description:
      'a proof of concept fiat-to-crypto ramp allowing users to easily convert nigerian naira (ngn) into a stablecoin erc20 token with p2p exchange features',
    role: 'core contributor(backend & smart contracts)',
    period: 'may 2024',
    achievements: [
      'built secure token minting and burning system',
      'implemented p2p exchange platform for token trading',
      'integrated fiat payment processing with paystack',
      'developed multi-component architecture across contracts, api, and frontend',
    ],
    technologies: [
      'typescript',
      'solidity',
      'honojs',
      'viem',
      'supabase',
      'drizzle orm',
    ],
    href: 'https://github.com/prettyirrelevant/wrapped-naira',
  },
  {
    title: 'gistrunner',
    description:
      'sandbox environment for executing code snippets from github gists',
    role: 'creator and maintainer',
    period: 'jan 2024',
    achievements: [
      'built a chrome extension',
      'built secure sandboxed execution environment using docker',
      'implemented support for multiple programming languages',
    ],
    technologies: ['go', 'docker', 'github api', 'javascript'],
    href: 'https://github.com/prettyirrelevant/gistrunner',
  },
  {
    title: 'bridgebloc',
    description: 'hassle-free token bridge across evm compatible chains',
    role: 'core contributor(backend)',
    period: 'aug 2023',
    achievements: [
      'implemented secure cross-chain token transfer protocol',
      'built intuitive interface for token bridging',
      'integrated multiple evm chains for widespread compatibility',
    ],
    technologies: ['typescript', 'solidity', 'web3', 'django'],
    href: 'https://github.com/prettyirrelevant/bridgebloc',
  },
  {
    title: 'decodify',
    description:
      "supercharges etherscan and its derivatives by using rotki's powerful decoding feature",
    role: 'creator and maintainer',
    period: 'jun 2023',
    achievements: [
      'gained 13 stars and multiple forks on github',
      'built cross-browser extension for ethereum transaction decoding',
      "leveraged rotki's transaction decoder for human-readable defi interactions",
    ],
    technologies: ['python', 'javascript', 'chrome extensions'],
    href: 'https://github.com/prettyirrelevant/decodify',
  },
  {
    title: 'waakye',
    description:
      'cross-platform playlist converter for music streaming services',
    role: 'creator and maintainer',
    period: 'apr 2023',
    achievements: [
      'implemented support for spotify, youtube music and deezer',
      'built efficient playlist syncing and conversion system',
      'created seamless authentication flow for multiple platforms',
    ],
    technologies: ['go', 'spotify api', 'youtube api', 'deezer api', 'docker'],
    href: 'https://github.com/prettyirrelevant/waakye',
  },
];

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: 'https://eniola.wtf/og/home?title=projects',
      },
    ],
  },
};
