import { BlogSection } from '@/components/blog-section';
import { Header } from '@/components/header';
import { LinksSection } from '@/components/links-section';
import { type Item, SectionList } from '@/components/section-list';

const workItems: Item[] = [
  {
    title: 'rotki',
    role: 'python backend engineer',
    period: 'oct 2024 - present',
    description:
      'building an open source, local-first portfolio tracking tool that enables crypto users to analyze their defi activity.',
    href: 'https://rotki.com',
  },
  {
    title: 'unyte',
    role: 'software engineer',
    period: 'jul 2024 - oct 2024',
    description:
      'contributed to an insurance infrastructure enabling businesses across africa to seamlessly embed and distribute insurance products via api integrations',
    href: 'https://unyte.africa',
  },
  {
    title: 'flashpay',
    role: 'lead developer & cofounder',
    period: 'may 2022 - jan 2024',
    description:
      'built fintech application on algorand blockchain to simplify payments, led technical architecture and development',
    href: 'https://flashpay.finance',
  },
];

const projectItems = [
  {
    title: 'gistrunner',
    role: 'creator',
    description:
      'your go-to for running code snippets directly on github gist!',
    href: 'https://github.com/prettyirrelevant/gistrunner',
  },
  {
    title: 'wrapped-naira',
    role: 'creator',
    description:
      'a proof of concept fiat-to-crypto ramp, allowing users to easily convert naira into a stablecoin erc20 token.',
    href: 'https://github.com/prettyirrelevant/wrapped-naira',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <BlogSection />
      <LinksSection />
    </>
  );
}
