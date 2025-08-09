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
  title: string;
}

export function LevelSelector({ 
  track, 
  selectedLevel, 
  onLevelSelect, 
  levels, 
  title 
}: LevelSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {levels.map((level, index) => (
          <Button
            key={level.id}
            variant="outline"
            onClick={() => onLevelSelect(level.id)}
            className={cn(
              "w-full h-auto p-4 flex items-center justify-between text-left",
              level.isBridge && "border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50",
              selectedLevel === level.id && !level.isBridge && track === 'dev' && "border-emerald-500 bg-emerald-50",
              selectedLevel === level.id && !level.isBridge && track === 'ops' && "border-amber-500 bg-amber-50",
              selectedLevel === level.id && level.isBridge && "border-purple-600 bg-gradient-to-r from-purple-100 to-blue-100"
            )}
          >
            <div className="flex-1">
              <div className="font-semibold mb-1">{level.title}</div>
              <div className="text-sm text-muted-foreground">{level.description}</div>
            </div>
            <Badge variant="secondary" className="ml-4">
              {level.isBridge ? '🌉' : index + 1}
            </Badge>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}