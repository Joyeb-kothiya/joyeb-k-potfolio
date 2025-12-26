import { BlogPageClient } from './BlogPageClient';
import { getPublishedBlogPosts, getAllTags } from '@/lib/blog';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const metadata = getMetadata('/blog');
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
  const tags = getAllTags();

  return (
    <>
      {/* Render client component with initial posts and tags */}
      <BlogPageClient initialPosts={posts} initialTags={tags} />
    </>
  );
}
