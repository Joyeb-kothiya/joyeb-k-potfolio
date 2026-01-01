import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { getPublishedBlogPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = getPublishedBlogPosts();
  const latestPosts = posts.slice(0, 4); // Get first 4 posts

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />

      {latestPosts.length > 0 ? (
        <div className="mt-8 grid gap-6 grid-cols-2">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="p-0 overflow-hidden">
              <div className="relative aspect-video w-full">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">
                  <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {post.frontmatter.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm underline underline-offset-4"
                  >
                    Read on site
                  </Link>
                  {post.frontmatter.originalUrl && (
                    <a
                      href={post.frontmatter.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:underline underline-offset-4"
                    >
                      Read original
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="mt-8 p-8 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-semibold text-muted-foreground">Coming Soon</p>
          <p className="text-sm text-muted-foreground mt-2">Stay tuned for exciting blog posts!</p>
        </Card>
      )}
    </Container>
  );
}
