import ContainerComponent from '@/components/common/Container';
import { Card } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience - Removed',
  description: 'Work experiences have been removed from this site.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorkExperiencePage() {
  return (
    <ContainerComponent className="py-16">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Work Experience
        </h1>
        <Card className="mt-8 p-8 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-semibold text-muted-foreground">Removed</p>
          <p className="text-sm text-muted-foreground mt-2">Work experiences have been removed from this site.</p>
        </Card>
      </div>
    </ContainerComponent>
  );
}
