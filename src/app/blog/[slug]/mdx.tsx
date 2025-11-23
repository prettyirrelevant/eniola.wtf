'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Children, createElement, isValidElement, useState } from 'react';
import { codeToHtml } from 'shiki';

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title={copied ? 'Copied!' : 'Copy code'}
      aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-400"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          <path d="M11 14l2 2l4 -4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-400"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </svg>
      )}
    </button>
  );
}

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header) => (
    <th key={header} className="p-2 text-left">
      {header}
    </th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell) => (
        <td key={cell} className="p-2 text-left">
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink({
  href,
  ...props
}: React.ComponentProps<typeof Link> & { href: string }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={props.alt} className="rounded-lg" {...props} />;
}

async function Pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  // Extract className from the children code tag
  const codeElement = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === 'code',
  ) as React.ReactElement<HTMLPreElement> | undefined;

  const className = codeElement?.props?.className ?? '';
  const isCodeBlock =
    typeof className === 'string' && className.startsWith('language-');

  if (isCodeBlock) {
    const lang = className.split(' ')[0]?.split('-')[1] ?? '';
    if (!lang) {
      return <code {...props}>{children}</code>;
    }

    const codeContent = String(codeElement?.props.children);
    const html = await codeToHtml(codeContent, {
      lang,
      themes: {
        dark: 'vesper',
        light: 'vitesse-light',
      },
    });

    return (
      <div className="relative">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <CopyButton code={codeContent} />
      </div>
    );
  }

  // If not, return the component as is
  return <pre {...props}>{children}</pre>;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const HeadingComponent = ({ children }: { children: React.ReactNode }) => {
    const childrenString = Children.toArray(children).join('');
    const slug = slugify(childrenString);
    return createElement(`h${level}`, { id: slug }, [
      createElement(
        'a',
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        },
        children,
      ),
    ]);
  };
  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

const components = {
  a: CustomLink,
  img: CustomImage,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: Pre,
  Table,
};

export function MDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components ?? {}) }}
    />
  );
}
