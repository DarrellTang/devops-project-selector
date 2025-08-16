import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TrackSelector } from '@/components/TrackSelector';
import { LevelSelector } from '@/components/LevelSelector';
import { ProjectsList } from '@/components/ProjectsList';
import type { Level, Project } from '@/types';

interface MobileTabNavigationProps {
  track: 'dev' | 'ops';
  selectedLevel: string | null;
  onTrackSelect: (track: 'dev' | 'ops') => void;
  onLevelSelect: (levelId: string) => void;
  levels: Level[];
  projects: Record<string, Project[]>;
}

type TabType = 'track' | 'level' | 'projects';

export function MobileTabNavigation({ 
  track, 
  selectedLevel, 
  onTrackSelect, 
  onLevelSelect, 
  levels,
  projects
}: MobileTabNavigationProps) {
  const [activeTab, setActiveTab] = useState<TabType>('track');
  const [internalSelectedLevel, setInternalSelectedLevel] = useState<string | null>(selectedLevel);
  const [internalSelectedTrack, setInternalSelectedTrack] = useState<'dev' | 'ops' | null>(track);

  // Use internal selections for tab navigation
  const currentSelectedLevel = internalSelectedLevel || selectedLevel;
  const currentTrack = internalSelectedTrack || track;

  // Temporarily disable auto-advance to test manual tab switching
  // useEffect(() => {
  //   if (currentTrack && !currentSelectedLevel && activeTab === 'track') {
  //     setActiveTab('level');
  //   } else if (currentTrack && currentSelectedLevel && activeTab === 'level') {
  //     setActiveTab('projects');
  //   }
  // }, [currentTrack, currentSelectedLevel]);

  const handleTrackSelect = (selectedTrack: 'dev' | 'ops') => {
    // For tab navigation, manage track selection internally without navigation
    setInternalSelectedTrack(selectedTrack);
    // Auto-advance to level tab after track selection
    setActiveTab('level');
  };

  const handleLevelSelect = (levelId: string) => {
    // For tab navigation, we manage level selection internally without navigation
    setInternalSelectedLevel(levelId);
    // Auto-advance to projects tab after level selection
    setActiveTab('projects');
  };

  const isTabAvailable = (tab: TabType): boolean => {
    switch (tab) {
      case 'track':
        return true;
      case 'level':
        return !!currentTrack;
      case 'projects':
        return !!currentTrack && !!currentSelectedLevel;
      default:
        return false;
    }
  };

  const isTabCompleted = (tab: TabType): boolean => {
    switch (tab) {
      case 'track':
        return !!currentTrack;
      case 'level':
        return !!currentSelectedLevel;
      case 'projects':
        return false; // Projects tab is never "completed"
      default:
        return false;
    }
  };

  const getTabIcon = (tab: TabType): string => {
    switch (tab) {
      case 'track':
        return '🚀';
      case 'level':
        return '📊';
      case 'projects':
        return '✨';
      default:
        return '';
    }
  };

  const getTabLabel = (tab: TabType): string => {
    switch (tab) {
      case 'track':
        return 'Track';
      case 'level':
        return 'Level';
      case 'projects':
        return 'Projects';
      default:
        return '';
    }
  };

  const tabs: TabType[] = ['track', 'level', 'projects'];

  return (
    <div className="flex flex-col h-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-600/30 bg-slate-800/50 backdrop-blur-sm">
        {tabs.map((tab) => {
          const isAvailable = isTabAvailable(tab);
          const isCompleted = isTabCompleted(tab);
          const isActive = activeTab === tab;
          
          return (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => isAvailable && setActiveTab(tab)}
              disabled={!isAvailable}
              className={cn(
                "flex-1 flex flex-col items-center gap-1 py-3 px-2 text-xs font-medium rounded-none transition-all duration-300",
                isActive && "bg-slate-700/50 border-b-2 border-cyan-400",
                isCompleted && !isActive && "text-emerald-400",
                isAvailable && !isActive && !isCompleted && "text-slate-300 hover:text-slate-100",
                !isAvailable && "text-slate-500 cursor-not-allowed"
              )}
            >
              <div className={cn(
                "text-lg",
                isCompleted && "filter brightness-125"
              )}>
                {getTabIcon(tab)}
              </div>
              <span className={cn(
                "text-[10px] leading-tight",
                isActive && "text-cyan-300 font-bold"
              )}>
                {getTabLabel(tab)}
              </span>
              {isCompleted && (
                <div className="w-1 h-1 bg-emerald-400 rounded-full mt-0.5"></div>
              )}
            </Button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'track' && (
          <div className="h-full p-4 animate-in slide-in-from-right-2 duration-300">
            <TrackSelector
              selectedTrack={currentTrack}
              onTrackSelect={handleTrackSelect}
            />
          </div>
        )}

        {activeTab === 'level' && currentTrack && (
          <div className="h-full p-4 animate-in slide-in-from-right-2 duration-300">
            {/* Custom Level Selector for Tab Navigation */}
            <Card className="glass-dark border-0 rounded-2xl overflow-hidden gap-0" style={{paddingTop: 0, paddingBottom: 0}}>
              <CardHeader className="sticky top-0 glass-dark z-10 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50" style={{padding: '12px 16px 8px 16px'}}>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  📊 Your Skills
                </CardTitle>
              </CardHeader>
              <CardContent style={{padding: '8px 16px 16px 16px'}}>
                <div className="space-y-3">
                  {levels.map((level, index) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      onClick={() => handleLevelSelect(level.id)}
                      className={cn(
                        "w-full h-auto p-3 flex items-start justify-between text-left border-2 transition-all duration-500 hover:scale-102 rounded-xl backdrop-blur-sm",
                        level.isBridge && "border-purple-400/60 bg-gradient-to-r from-purple-900/30 to-blue-900/30 hover:from-purple-800/40 hover:to-blue-800/40",
                        currentSelectedLevel === level.id && !level.isBridge && currentTrack === 'dev' && "border-emerald-400/80 bg-gradient-to-r from-emerald-900/40 to-green-900/40 neon-glow-emerald scale-102",
                        currentSelectedLevel === level.id && !level.isBridge && currentTrack === 'ops' && "border-amber-400/80 bg-gradient-to-r from-amber-900/40 to-orange-900/40 neon-glow-amber scale-102",
                        currentSelectedLevel === level.id && level.isBridge && "border-purple-500/80 bg-gradient-to-r from-purple-800/40 to-blue-800/40 neon-glow-purple scale-102",
                        currentSelectedLevel !== level.id && !level.isBridge && "border-slate-600/50 bg-slate-800/30 hover:border-slate-500/60 hover:bg-slate-700/40",
                        currentSelectedLevel !== level.id && level.isBridge && "hover:border-purple-400/60"
                      )}
                    >
                      <div className="flex-1 min-w-0 pr-2">
                        <div className={cn(
                          "font-semibold mb-1 text-sm leading-tight",
                          level.isBridge && "text-purple-300",
                          currentSelectedLevel === level.id && currentTrack === 'dev' && !level.isBridge && "text-emerald-300",
                          currentSelectedLevel === level.id && currentTrack === 'ops' && !level.isBridge && "text-amber-300",
                          currentSelectedLevel !== level.id && "text-slate-200"
                        )}>{level.title}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{level.description}</div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "ml-1 mt-0.5 flex-shrink-0 text-[10px] font-bold border backdrop-blur-sm w-6 h-6 flex items-center justify-center p-0",
                          level.isBridge && "bg-purple-900/60 text-purple-200 border-purple-400/40",
                          currentSelectedLevel === level.id && currentTrack === 'dev' && !level.isBridge && "bg-emerald-900/60 text-emerald-200 border-emerald-400/40",
                          currentSelectedLevel === level.id && currentTrack === 'ops' && !level.isBridge && "bg-amber-900/60 text-amber-200 border-amber-400/40",
                          currentSelectedLevel !== level.id && "bg-slate-700/60 text-slate-300 border-slate-500/40"
                        )}
                      >
                        {level.isBridge ? '🌉' : index + 1}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'projects' && currentTrack && currentSelectedLevel && (
          <div className="h-full p-4 animate-in slide-in-from-right-2 duration-300">
            <ProjectsList
              track={currentTrack}
              levelId={currentSelectedLevel}
              projects={projects[currentSelectedLevel] || []}
              levels={levels}
            />
          </div>
        )}
      </div>

      {/* Progress Summary (Optional Footer) */}
      {(currentTrack || currentSelectedLevel) && (
        <div className="px-4 py-2 bg-slate-800/30 border-t border-slate-600/20 text-xs text-slate-400">
          {currentTrack && (
            <span className="text-emerald-400 font-medium">
              {currentTrack === 'dev' ? 'Developer' : 'Operations'} Track
            </span>
          )}
          {currentTrack && currentSelectedLevel && (
            <>
              <span className="mx-2">→</span>
              <span className="text-cyan-400 font-medium">
                {levels.find(l => l.id === currentSelectedLevel)?.title}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}