'use client';

import { useRouter } from 'next/navigation';
import { TrackSelector } from '@/components/TrackSelector';
import { Header } from '@/components/Header';

export default function Home() {
  const router = useRouter();

  const handleTrackSelect = (track: 'dev' | 'ops') => {
    router.push(`/${track}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <Header />
        
        <div className="space-y-6">
          <TrackSelector
            selectedTrack={null}
            onTrackSelect={handleTrackSelect}
          />
        </div>
      </div>
    </div>
  );
}
