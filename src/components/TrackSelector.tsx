import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TrackSelectorProps {
  selectedTrack: 'dev' | 'ops' | null;
  onTrackSelect: (track: 'dev' | 'ops') => void;
}

export function TrackSelector({ selectedTrack, onTrackSelect }: TrackSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🚀 What&apos;s your background?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => onTrackSelect('dev')}
            className={cn(
              "h-auto p-6 flex flex-col items-center space-y-2 text-center",
              selectedTrack === 'dev' && "border-emerald-500 bg-emerald-50 hover:bg-emerald-100"
            )}
          >
            <div className="text-3xl">💻</div>
            <div className="text-lg font-semibold">Developer Track</div>
            <div className="text-sm text-muted-foreground">
              I write code, build apps, know programming languages
            </div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => onTrackSelect('ops')}
            className={cn(
              "h-auto p-6 flex flex-col items-center space-y-2 text-center",
              selectedTrack === 'ops' && "border-amber-500 bg-amber-50 hover:bg-amber-100"
            )}
          >
            <div className="text-3xl">⚙️</div>
            <div className="text-lg font-semibold">Operations Track</div>
            <div className="text-sm text-muted-foreground">
              I manage servers, infrastructure, know Linux/Windows
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}