'use client';

import { projects } from '@/config/Projects';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { Card } from '../ui/card';

export default function Projects() {
  // Show the first three projects, rest are coming soon
  const activeProjects = projects.slice(0, 3);
  const comingSoonCount = projects.length - 3;

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="My" heading="Projects" />

      <ProjectList className="mt-8" projects={activeProjects} />

      {comingSoonCount > 0 && (
        <Card className="mt-8 p-8 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-semibold text-muted-foreground">More Projects Coming Soon</p>
          <p className="text-sm text-muted-foreground mt-2">{comingSoonCount} more exciting projects are on the way!</p>
        </Card>
      )}
    </Container>
  );
}
