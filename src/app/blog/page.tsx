import { BlogPageClient } from './BlogPageClient';
import { Suspense } from 'react';
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
      <Suspense fallback={<div className="py-16">Loading...</div>}>
        <BlogPageClient initialPosts={posts} initialTags={tags} />
      </Suspense>
    </>
  );
}
