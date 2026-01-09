
export interface Tournament {
  id: string;
  name: string;
  date: string;
  prize: string;
  status: 'Upcoming' | 'Live' | 'Completed';
  image: string;
}

export interface CricketScore {
  match: string;
  score: string;
  overs: string;
  status: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Insight {
  id: string;
  title: string;
  tag: string;
  summary: string;
  link: string;
}
