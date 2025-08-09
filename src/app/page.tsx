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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
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
