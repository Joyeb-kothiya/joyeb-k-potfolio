import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { getPublishedBlogPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = getPublishedBlogPosts();
  const latest = posts.length > 0 ? posts[0] : null;

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />

      {latest ? (
        <Card className="mt-8 p-0 overflow-hidden">
          <div className="relative aspect-video w-full">
            <Link href={`/blog/${latest.slug}`}>
              <Image
                src={latest.frontmatter.image}
                alt={latest.frontmatter.title}
                fill
                className="object-cover"
              />
            </Link>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold">
              <Link href={`/blog/${latest.slug}`}>{latest.frontmatter.title}</Link>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              {latest.frontmatter.description}
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                href={`/blog/${latest.slug}`}
                className="text-sm underline underline-offset-4"
              >
                Read on site
              </Link>
              {latest.frontmatter.originalUrl && (
                <a
                  href={latest.frontmatter.originalUrl}
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
      ) : (
        <Card className="mt-8 p-8 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-semibold text-muted-foreground">Coming Soon</p>
          <p className="text-sm text-muted-foreground mt-2">Stay tuned for exciting blog posts!</p>
        </Card>
      )}
    </Container>
  );
}
