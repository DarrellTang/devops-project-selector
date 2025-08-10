import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Target, ExternalLink, CheckCircle } from 'lucide-react';
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
  
  const getProgressionBadgeProps = (progression: string) => {
    // Direct string matching approach for reliability
    if (progression.includes('**Build:**') || progression.includes('**build:**')) {
      const textMatch = progression.match(/\*\*[Bb]uild:\*\*\s*(.*)/);
      return { icon: '🏗️', type: 'build', text: textMatch?.[1]?.trim() || '' };
    }
    if (progression.includes('**Upgrade:**') || progression.includes('**upgrade:**')) {
      const textMatch = progression.match(/\*\*[Uu]pgrade:\*\*\s*(.*)/);
      return { icon: '🔄', type: 'upgrade', text: textMatch?.[1]?.trim() || '' };
    }
    if (progression.includes('**Replace:**') || progression.includes('**replace:**')) {
      const textMatch = progression.match(/\*\*[Rr]eplace:\*\*\s*(.*)/);
      return { icon: '🔀', type: 'replace', text: textMatch?.[1]?.trim() || '' };
    }
    if (progression.includes('**Add:**') || progression.includes('**add:**')) {
      const textMatch = progression.match(/\*\*[Aa]dd:\*\*\s*(.*)/);
      return { icon: '➕', type: 'add', text: textMatch?.[1]?.trim() || '' };
    }
    if (progression.includes('**Launch:**') || progression.includes('**launch:**')) {
      const textMatch = progression.match(/\*\*[Ll]aunch:\*\*\s*(.*)/);
      return { icon: '🚀', type: 'launch', text: textMatch?.[1]?.trim() || '' };
    }
    
    // Fallback
    return { icon: '🏗️', type: 'build', text: progression };
  };
  
  const getProgressionBadgeStyles = (type: string, track: string) => {
    const baseStyles = "px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm shadow-lg flex items-center gap-1";
    
    switch (type) {
      case 'build':
        return cn(baseStyles, "bg-emerald-900/70 text-emerald-200 border-emerald-400/50");
      case 'upgrade':
        return cn(baseStyles, "bg-blue-900/70 text-blue-200 border-blue-400/50");
      case 'replace':
        return cn(baseStyles, "bg-amber-900/70 text-amber-200 border-amber-400/50");
      case 'add':
        return cn(baseStyles, "bg-purple-900/70 text-purple-200 border-purple-400/50");
      case 'launch':
        return cn(baseStyles, "bg-pink-900/70 text-pink-200 border-pink-400/50");
      default:
        return cn(baseStyles, "bg-slate-700/70 text-slate-200 border-slate-400/50");
    }
  };
  
  const getProjectResources = (project: Project) => {
    return project.resources || [];
  };
  
  const getProjectPrerequisites = (project: Project) => {
    return project.prerequisites || [];
  };
  
  const getSuccessCriteria = (project: Project) => {
    return project.successCriteria || [];
  };

  const getProgressionHint = () => {
    if (levelId === 'bridge') {
      return (
        <div className="bg-gradient-to-r from-purple-950/60 to-blue-950/60 border border-purple-400/40 rounded-xl p-4 backdrop-blur-sm break-words">
          <strong className="text-purple-300">🎉 Convergence Point!</strong> <span className="text-slate-300">You&apos;re learning the other side of DevOps! 
          After completing these cross-training projects, you&apos;ll be a well-rounded DevOps engineer 
          ready for advanced topics like platform engineering, security, and team leadership.</span>
        </div>
      );
    } else if (nextLevel) {
      if (nextLevel.isBridge) {
        return (
          <div className="bg-gradient-to-r from-purple-950/60 to-blue-950/60 border border-purple-400/40 rounded-xl p-4 backdrop-blur-sm break-words">
            <strong className="text-purple-300">🌉 Bridge Ahead!</strong> <span className="text-slate-300">After completing these projects, you&apos;ll reach the 
            </span><strong className="text-purple-200"> Bridge Level</strong> <span className="text-slate-300">where you&apos;ll learn the other side of DevOps. 
            This is where {track === 'dev' ? 'developers learn operations' : 'ops folks learn development'}!</span>
          </div>
        );
      } else {
        return (
          <div className="bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-blue-400/40 rounded-xl p-4 backdrop-blur-sm break-words">
            <strong className="text-blue-300">Next up:</strong> <span className="text-slate-300">After completing these projects, you&apos;ll be ready for 
            &ldquo;</span><strong className="text-blue-200 break-words">{nextLevel.title}</strong><span className="text-slate-300">&rdquo; - come back to see what unlocks next!</span>
          </div>
        );
      }
    } else {
      return (
        <div className="bg-gradient-to-r from-emerald-950/60 to-green-950/60 border border-emerald-400/40 rounded-xl p-4 backdrop-blur-sm break-words">
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
      <Card className="flex-1 flex flex-col glass-dark border-0 rounded-2xl overflow-hidden gap-0" style={{paddingTop: 0, paddingBottom: 0}}>
        <CardHeader className="sticky top-0 glass-dark z-10 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50" style={{padding: '12px 16px 8px 16px'}}>
          <CardTitle className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ✨ Your Next Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto" style={{padding: '8px 16px 16px 16px'}}>
          <div className="space-y-3">
            {projects.map((project, index) => {
              const progressionProps = project.progression ? getProgressionBadgeProps(project.progression) : null;
              
              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card
                      className={cn(
                        "w-full cursor-pointer overflow-hidden border-l-4 bg-gradient-to-r shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-600/30 backdrop-blur-sm rounded-xl",
                        project.track === 'dev' && "border-l-emerald-400 from-emerald-950/40 via-slate-900/60 to-slate-800/40 hover:from-emerald-900/50 hover:to-slate-700/50",
                        project.track === 'ops' && "border-l-amber-400 from-amber-950/40 via-slate-900/60 to-slate-800/40 hover:from-amber-900/50 hover:to-slate-700/50",
                        project.track === 'bridge' && "border-l-purple-400 from-purple-950/40 via-slate-900/60 to-slate-800/40 hover:from-purple-900/50 hover:to-slate-700/50"
                      )}
                    >
                      {/* Compact card content */}
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          {progressionProps && (
                            <div className={getProgressionBadgeStyles(progressionProps.type, project.track)}>
                              <span className="flex-shrink-0">{progressionProps.icon}</span>
                              <span className="truncate">{progressionProps.type.toUpperCase()}</span>
                            </div>
                          )}
                        </div>
                        
                        <h4 className={cn(
                          "text-base font-bold leading-tight mb-2 break-words hyphens-auto",
                          project.track === 'dev' && "text-emerald-300 drop-shadow-sm",
                          project.track === 'ops' && "text-amber-300 drop-shadow-sm", 
                          project.track === 'bridge' && "text-purple-300 drop-shadow-sm"
                        )}>
                          {project.title}
                        </h4>
                        
                        <p className="text-slate-300 text-sm leading-relaxed break-words">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 border-slate-600 text-slate-100">
                    <DialogHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <DialogTitle className={cn(
                            "text-xl font-bold mb-2",
                            project.track === 'dev' && "text-emerald-300",
                            project.track === 'ops' && "text-amber-300", 
                            project.track === 'bridge' && "text-purple-300"
                          )}>
                            {project.title}
                          </DialogTitle>
                          <div className="flex gap-2 items-center">
                            {project.difficulty && (
                              <span className="text-xs px-2 py-1 bg-slate-700 rounded-full text-slate-300 capitalize">
                                {project.difficulty}
                              </span>
                            )}
                          </div>
                        </div>
                        {progressionProps && (
                          <div className={getProgressionBadgeStyles(progressionProps.type, project.track)}>
                            <span>{progressionProps.icon}</span>
                            <span>{progressionProps.type.toUpperCase()}</span>
                          </div>
                        )}
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-slate-200">What You'll Do</h3>
                        <p className="text-slate-300 leading-relaxed">{project.description}</p>
                      </div>
                      
                      {/* You'll Learn */}
                      {progressionProps?.text && progressionProps.text.trim().length > 5 && (
                        <div className="bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border border-cyan-400/30 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-start gap-3">
                            <Target className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                            <div>
                              <h3 className="text-lg font-semibold text-cyan-300 mb-2">You'll Learn</h3>
                              <p className="text-cyan-100 leading-relaxed">{progressionProps.text}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Prerequisites */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-slate-200">Prerequisites</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {getProjectPrerequisites(project).map((prereq, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span className="text-slate-300">{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Resources */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-slate-200">Key Resources</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {getProjectResources(project).map((resource, idx) => (
                            <a
                              key={idx}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 p-3 bg-slate-800/60 rounded-lg hover:bg-slate-700/60 transition-colors border border-slate-600/30"
                            >
                              <ExternalLink className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span className="text-slate-200 text-sm font-medium">{resource.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                      
                      {/* Success Criteria */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-slate-200">Success Criteria</h3>
                        <div className="space-y-2">
                          {getSuccessCriteria(project).map((criteria, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300">{criteria}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Why This Matters */}
                      <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-600/30">
                        <h3 className="text-lg font-semibold mb-2 text-slate-200">💡 Why This Matters</h3>
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                          {project.why.replace('Why this matters: ', '')}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
            
            <div className="mt-6">
              {getProgressionHint()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}