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
        <div className="bg-gradient-to-r from-purple-950/60 to-blue-950/60 border border-purple-400/40 rounded-xl p-4 backdrop-blur-sm">
          <strong className="text-purple-300">🎉 Convergence Point!</strong> <span className="text-slate-300">You&apos;re learning the other side of DevOps! 
          After completing these cross-training projects, you&apos;ll be a well-rounded DevOps engineer 
          ready for advanced topics like platform engineering, security, and team leadership.</span>
        </div>
      );
    } else if (nextLevel) {
      if (nextLevel.isBridge) {
        return (
          <div className="bg-gradient-to-r from-purple-950/60 to-blue-950/60 border border-purple-400/40 rounded-xl p-4 backdrop-blur-sm">
            <strong className="text-purple-300">🌉 Bridge Ahead!</strong> <span className="text-slate-300">After completing these projects, you&apos;ll reach the 
            </span><strong className="text-purple-200"> Bridge Level</strong> <span className="text-slate-300">where you&apos;ll learn the other side of DevOps. 
            This is where {track === 'dev' ? 'developers learn operations' : 'ops folks learn development'}!</span>
          </div>
        );
      } else {
        return (
          <div className="bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-blue-400/40 rounded-xl p-4 backdrop-blur-sm">
            <strong className="text-blue-300">Next up:</strong> <span className="text-slate-300">After completing these projects, you&apos;ll be ready for 
            &ldquo;</span><strong className="text-blue-200">{nextLevel.title}</strong><span className="text-slate-300">&rdquo; - come back to see what unlocks next!</span>
          </div>
        );
      }
    } else {
      return (
        <div className="bg-gradient-to-r from-emerald-950/60 to-green-950/60 border border-emerald-400/40 rounded-xl p-4 backdrop-blur-sm">
          <strong className="text-emerald-300">🎯 Track Complete!</strong> <span className="text-slate-300">You&apos;ve mastered the {track === 'dev' ? 'developer' : 'operations'} track. 
          Ready for the Bridge Level to learn the other side?</span>
        </div>
      );
    }
  };

  if (projects.length === 0) {
    return (
      <Card className="glass-dark border-0 rounded-2xl">
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4 filter brightness-125">✨</div>
          <p className="text-slate-300 text-lg">
            Select your current skills to see personalized project recommendations!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <Card className="flex-1 flex flex-col glass-dark border-0 rounded-2xl overflow-hidden">
        <CardHeader className="sticky top-0 glass-dark z-10 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <CardTitle className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ✨ Your Next Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-3">
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-2xl border-l-4 bg-gradient-to-r shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-102 border border-slate-600/30 backdrop-blur-sm",
                  project.track === 'dev' && "border-l-emerald-400 from-emerald-950/40 via-slate-900/60 to-slate-800/40 hover:from-emerald-900/50 hover:to-slate-700/50",
                  project.track === 'ops' && "border-l-amber-400 from-amber-950/40 via-slate-900/60 to-slate-800/40 hover:from-amber-900/50 hover:to-slate-700/50",
                  project.track === 'bridge' && "border-l-purple-400 from-purple-950/40 via-slate-900/60 to-slate-800/40 hover:from-purple-900/50 hover:to-slate-700/50"
                )}
              >
                <h4 className={cn(
                  "text-base font-bold mb-3 leading-tight",
                  project.track === 'dev' && "text-emerald-300 drop-shadow-sm",
                  project.track === 'ops' && "text-amber-300 drop-shadow-sm", 
                  project.track === 'bridge' && "text-purple-300 drop-shadow-sm"
                )}>
                  {project.title}
                </h4>
                
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-slate-800/60 backdrop-blur-md rounded-lg p-3 mb-3 border border-slate-600/40">
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-200">💡 Why this matters:</span> <span className="italic">{project.why.replace('Why this matters: ', '')}</span>
                  </div>
                </div>
                
                {project.progression && (
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-xs font-bold shadow-lg border backdrop-blur-sm",
                      project.track === 'dev' && "bg-emerald-900/60 text-emerald-200 border-emerald-400/50",
                      project.track === 'ops' && "bg-amber-900/60 text-amber-200 border-amber-400/50",
                      project.track === 'bridge' && "bg-purple-900/60 text-purple-200 border-purple-400/50"
                    )}
                  >
                    {project.progression}
                  </Badge>
                )}
              </div>
            ))}
            
            <div className="mt-6">
              {getProgressionHint()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}