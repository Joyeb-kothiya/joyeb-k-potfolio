import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Card } from '../ui/card';

export default function Blog() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <Card className="mt-8 p-8 flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-semibold text-muted-foreground">Coming Soon</p>
        <p className="text-sm text-muted-foreground mt-2">Stay tuned for exciting blog posts!</p>
      </Card>
    </Container>
  );
}
