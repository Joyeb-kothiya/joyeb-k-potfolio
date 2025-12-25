import ContainerComponent from '@/components/common/Container';
import { Card } from '@/components/ui/card';
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
  return (
    <ContainerComponent className="py-16">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <Card className="mt-8 p-8 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-semibold text-muted-foreground">Coming Soon</p>
          <p className="text-sm text-muted-foreground mt-2">The blog has been paused — check back later.</p>
        </Card>
      </div>
    </ContainerComponent>
  );
}
