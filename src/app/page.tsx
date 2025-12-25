import ContainerComponent from '@/components/common/Container';
import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <ContainerComponent className="min-h-screen py-16">
      <Hero />
      <Work />
      <About />
      <Blog />
      {/* CTA removed (Book Me) */}
    </ContainerComponent>
  );
}
