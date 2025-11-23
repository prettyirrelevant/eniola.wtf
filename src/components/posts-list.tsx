import type { MDXFileData } from '@/lib/blog';
import { Posts } from './posts';

export function PostsList({ posts }: { posts: MDXFileData[] }) {
  return <Posts posts={posts} />;
}
