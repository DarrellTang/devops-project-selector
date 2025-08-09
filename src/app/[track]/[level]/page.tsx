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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)] min-h-[600px]">
          {/* Left Column: Track Selection */}
          <div className="lg:col-span-3">
            <TrackSelector
              selectedTrack={selectedTrack}
              onTrackSelect={handleTrackSelect}
            />
          </div>
          
          {/* Middle Column: Level Selection */}
          <div className="lg:col-span-4 overflow-y-auto">
            <LevelSelector
              track={selectedTrack}
              selectedLevel={selectedLevel}
              onLevelSelect={handleLevelSelect}
              levels={trackData[selectedTrack].levels}
              title={trackData[selectedTrack].title}
            />
          </div>
          
          {/* Right Column: Projects */}
          <div className="lg:col-span-5 overflow-y-auto">
            <ProjectsList
              track={selectedTrack}
              levelId={selectedLevel}
              projects={trackData[selectedTrack].projects[selectedLevel] || []}
              levels={trackData[selectedTrack].levels}
            />
          </div>
        </div>
      </div>
    </div>
  );
}