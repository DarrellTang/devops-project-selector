import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Level } from '@/types';

interface LevelSelectorProps {
  track: 'dev' | 'ops';
  selectedLevel: string | null;
  onLevelSelect: (levelId: string) => void;
  levels: Level[];
}

export function LevelSelector({ 
  track, 
  selectedLevel, 
  onLevelSelect, 
  levels 
}: LevelSelectorProps) {
  return (
    <div className="h-full flex flex-col">
      <Card className="flex-1 flex flex-col glass-dark border-0 rounded-2xl gap-0" style={{paddingTop: 0, paddingBottom: 0}}>
        <CardHeader className="sticky top-0 glass-dark z-10 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50" style={{padding: '12px 16px 8px 16px'}}>
          <CardTitle className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            📊 Your Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1" style={{padding: '8px 16px 16px 16px'}}>
          <div className="space-y-3">
            {levels.map((level, index) => (
              <Button
                key={level.id}
                variant="outline"
                onClick={() => onLevelSelect(level.id)}
                className={cn(
                  "w-full h-auto p-3 flex items-start justify-between text-left border-2 transition-all duration-500 hover:scale-102 rounded-xl backdrop-blur-sm",
                  level.isBridge && "border-purple-400/60 bg-gradient-to-r from-purple-900/30 to-blue-900/30 hover:from-purple-800/40 hover:to-blue-800/40",
                  selectedLevel === level.id && !level.isBridge && track === 'dev' && "border-emerald-400/80 bg-gradient-to-r from-emerald-900/40 to-green-900/40 neon-glow-emerald scale-102",
                  selectedLevel === level.id && !level.isBridge && track === 'ops' && "border-amber-400/80 bg-gradient-to-r from-amber-900/40 to-orange-900/40 neon-glow-amber scale-102",
                  selectedLevel === level.id && level.isBridge && "border-purple-500/80 bg-gradient-to-r from-purple-800/40 to-blue-800/40 neon-glow-purple scale-102",
                  selectedLevel !== level.id && !level.isBridge && "border-slate-600/50 bg-slate-800/30 hover:border-slate-500/60 hover:bg-slate-700/40",
                  selectedLevel !== level.id && level.isBridge && "hover:border-purple-400/60"
                )}
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className={cn(
                    "font-semibold mb-1 text-sm leading-tight",
                    level.isBridge && "text-purple-300",
                    selectedLevel === level.id && track === 'dev' && !level.isBridge && "text-emerald-300",
                    selectedLevel === level.id && track === 'ops' && !level.isBridge && "text-amber-300",
                    selectedLevel !== level.id && "text-slate-200"
                  )}>{level.title}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{level.description}</div>
                </div>
                <Badge 
                  variant="secondary" 
                  className={cn(
                    "ml-1 mt-0.5 flex-shrink-0 text-[10px] font-bold border backdrop-blur-sm w-6 h-6 flex items-center justify-center p-0",
                    level.isBridge && "bg-purple-900/60 text-purple-200 border-purple-400/40",
                    selectedLevel === level.id && track === 'dev' && !level.isBridge && "bg-emerald-900/60 text-emerald-200 border-emerald-400/40",
                    selectedLevel === level.id && track === 'ops' && !level.isBridge && "bg-amber-900/60 text-amber-200 border-amber-400/40",
                    selectedLevel !== level.id && "bg-slate-700/60 text-slate-300 border-slate-500/40"
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
  );
}