import ContainerComponent from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/config/Projects';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.title === 'Code Breaker') || projects[0];
  const others = projects.filter((p) => p !== featured);

  return (
    <ContainerComponent className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Featured work and upcoming projects.
          </p>
        </div>

        <Separator />

        {/* Featured Project */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured</h2>
          <ProjectList projects={featured ? [featured] : []} />
        </div>

        <Separator />

        {/* Coming Soon for other projects */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">More Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border bg-card p-6 flex flex-col items-start justify-center text-left"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}
