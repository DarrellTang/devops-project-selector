import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TrackSelectorProps {
  selectedTrack: 'dev' | 'ops' | null;
  onTrackSelect: (track: 'dev' | 'ops') => void;
}

export function TrackSelector({ selectedTrack, onTrackSelect }: TrackSelectorProps) {
  return (
    <Card className="glass-dark border-0 rounded-2xl overflow-hidden gap-0" style={{paddingTop: 0, paddingBottom: 0}}>
      <CardHeader className="sticky top-0 glass-dark z-10 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50" style={{padding: '12px 16px 8px 16px'}}>
        <CardTitle className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          🚀 Your Background
        </CardTitle>
      </CardHeader>
      <CardContent style={{padding: '8px 16px 16px 16px'}}>
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => onTrackSelect('dev')}
            className={cn(
              "h-28 w-full p-3 flex flex-col items-center justify-center space-y-1 text-center border-2 transition-all duration-500 hover:scale-105 rounded-xl backdrop-blur-sm",
              selectedTrack === 'dev' 
                ? "border-emerald-400/60 bg-gradient-to-br from-emerald-900/40 to-green-900/40 neon-glow-emerald scale-105" 
                : "border-slate-600/50 hover:border-emerald-400/40 bg-slate-800/40 hover:bg-slate-700/50"
            )}
          >
            <div className="text-2xl drop-shadow-lg filter brightness-110">💻</div>
            <div className="text-sm font-bold text-emerald-300">Developer Track</div>
            <div className="text-xs text-slate-300 leading-tight px-1">
              I write code & build apps
            </div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => onTrackSelect('ops')}
            className={cn(
              "h-28 w-full p-3 flex flex-col items-center justify-center space-y-1 text-center border-2 transition-all duration-500 hover:scale-105 rounded-xl backdrop-blur-sm",
              selectedTrack === 'ops' 
                ? "border-amber-400/60 bg-gradient-to-br from-amber-900/40 to-orange-900/40 neon-glow-amber scale-105" 
                : "border-slate-600/50 hover:border-amber-400/40 bg-slate-800/40 hover:bg-slate-700/50"
            )}
          >
            <div className="text-2xl drop-shadow-lg filter brightness-110">⚙️</div>
            <div className="text-sm font-bold text-amber-300">Operations Track</div>
            <div className="text-xs text-slate-300 leading-tight px-1">
              I manage servers & infra
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}