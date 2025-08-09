'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { trackData } from '@/data/tracks';
import { TrackSelector } from '@/components/TrackSelector';
import { LevelSelector } from '@/components/LevelSelector';
import { ProjectsList } from '@/components/ProjectsList';
import { Header } from '@/components/Header';

export default function TrackLevelPage() {
  const params = useParams();
  const router = useRouter();
  const trackParam = params.track as string;
  const levelParam = params.level as string;
  
  const [selectedTrack, setSelectedTrack] = useState<'dev' | 'ops' | null>(
    trackParam === 'dev' || trackParam === 'ops' ? trackParam : null
  );
  const [selectedLevel, setSelectedLevel] = useState<string | null>(levelParam);

  useEffect(() => {
    if (trackParam && trackParam !== 'dev' && trackParam !== 'ops') {
      router.push('/');
      return;
    }

    // Validate level exists for track
    if (selectedTrack && levelParam) {
      const levelExists = trackData[selectedTrack].levels.some(level => level.id === levelParam);
      if (!levelExists) {
        router.push(`/${selectedTrack}`);
        return;
      }
    }
  }, [trackParam, levelParam, selectedTrack, router]);

  const handleTrackSelect = (track: 'dev' | 'ops') => {
    setSelectedTrack(track);
    setSelectedLevel(null);
    router.push(`/${track}`);
  };

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    router.push(`/${selectedTrack}/${levelId}`);
  };

  if (!selectedTrack || !selectedLevel) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <Header />
        
        <div className="space-y-6">
          <TrackSelector
            selectedTrack={selectedTrack}
            onTrackSelect={handleTrackSelect}
          />
          
          <LevelSelector
            track={selectedTrack}
            selectedLevel={selectedLevel}
            onLevelSelect={handleLevelSelect}
            levels={trackData[selectedTrack].levels}
            title={trackData[selectedTrack].title}
          />
          
          <ProjectsList
            track={selectedTrack}
            levelId={selectedLevel}
            projects={trackData[selectedTrack].projects[selectedLevel] || []}
            levels={trackData[selectedTrack].levels}
          />
        </div>
      </div>
    </div>
  );
}