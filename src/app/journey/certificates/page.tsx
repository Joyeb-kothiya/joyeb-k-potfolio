import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';
import CertificatesGallery from '@/components/CertificatesGallery';

export const metadata: Metadata = {
  ...getMetadata('/journey/certificates'),
  robots: { index: true, follow: true },
};

export default function CertificatesPage() {
  return (
    <Container className="py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Certificates & Achievements
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground px-4">
            A curated list of my certificates and notable achievements.
          </p>
        </div>
        <Separator />

        <div className="space-y-8 md:space-y-12">
          <p className="text-sm text-muted-foreground">
            Add certificates (PNG/JPEG) to <code className="font-mono">public/certificates</code> or register
            them in <code className="font-mono">src/config/Achievements.tsx</code>. Files placed in the
            directory are auto-discovered and displayed here.
          </p>

          <CertificatesGallery />
        </div>
      </div>
    </Container>
  );
}