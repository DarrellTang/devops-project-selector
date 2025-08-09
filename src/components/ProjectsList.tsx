import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Project, Level } from '@/types';

interface ProjectsListProps {
  track: 'dev' | 'ops';
  levelId: string;
  projects: Project[];
  levels: Level[];
}

export function ProjectsList({ track, levelId, projects, levels }: ProjectsListProps) {
  // Find current and next level for progression hint
  const currentLevelIndex = levels.findIndex(l => l.id === levelId);
  const nextLevel = levels[currentLevelIndex + 1];

  const getProgressionHint = () => {
    if (levelId === 'bridge') {
      return (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
          <strong className="text-purple-700">🎉 Convergence Point!</strong> You&apos;re learning the other side of DevOps! 
          After completing these cross-training projects, you&apos;ll be a well-rounded DevOps engineer 
          ready for advanced topics like platform engineering, security, and team leadership.
        </div>
      );
    } else if (nextLevel) {
      if (nextLevel.isBridge) {
        return (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
            <strong className="text-purple-700">🌉 Bridge Ahead!</strong> After completing these projects, you&apos;ll reach the 
            <strong> Bridge Level</strong> where you&apos;ll learn the other side of DevOps. 
            This is where {track === 'dev' ? 'developers learn operations' : 'ops folks learn development'}!
          </div>
        );
      } else {
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <strong className="text-blue-700">Next up:</strong> After completing these projects, you&apos;ll be ready for 
            &ldquo;{nextLevel.title}&rdquo; - come back to see what unlocks next!
          </div>
        );
      }
    } else {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <strong className="text-green-700">🎯 Track Complete!</strong> You&apos;ve mastered the {track === 'dev' ? 'developer' : 'operations'} track. 
          Ready for the Bridge Level to learn the other side?
        </div>
      );
    }
  };

  if (projects.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <p className="text-muted-foreground">
            Select your current skills to see personalized project recommendations!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ✨ Your Next Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-lg border-l-4 bg-gradient-to-r",
                project.track === 'dev' && "border-l-emerald-500 from-emerald-50 to-green-50",
                project.track === 'ops' && "border-l-amber-500 from-amber-50 to-orange-50",
                project.track === 'bridge' && "border-l-purple-500 from-purple-50 to-blue-50"
              )}
            >
              <h4 className="text-lg font-medium text-blue-600 mb-3">
                {project.title}
              </h4>
              
              <p className="text-slate-700 mb-3">
                {project.description}
              </p>
              
              <div className="bg-slate-100 rounded-md p-3 mb-3 italic text-sm text-slate-600">
                {project.why}
              </div>
              
              {project.progression && (
                <Badge 
                  variant="secondary" 
                  className="bg-blue-100 text-blue-800 border border-blue-200"
                >
                  {project.progression}
                </Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
      
      {getProgressionHint()}
    </div>
  );
}