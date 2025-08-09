export interface Project {
  title: string;
  description: string;
  why: string;
  track: 'dev' | 'ops' | 'bridge';
  progression: string;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  isBridge?: boolean;
}

export interface Track {
  title: string;
  levels: Level[];
  projects: Record<string, Project[]>;
}

export interface TrackData {
  dev: Track;
  ops: Track;
}