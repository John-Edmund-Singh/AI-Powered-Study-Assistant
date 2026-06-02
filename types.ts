export interface StudyDay {
  day: number;
  topic: string;
  duration: string;
  isBreak: boolean;
  details: string;
  completed?: boolean;
}

export interface Resource {
  title: string;
  type: 'Video' | 'Article' | 'Interactive Tutorial' | 'Documentation' | 'Book';
  url: string;
  description: string;
}

export interface Source {
  title: string;
  uri: string;
}

export interface StudyPlanResponse {
  studyPlan: StudyDay[];
  resources: Resource[];
  wellnessTips: string[];
  sources?: Source[];
}

export interface TopicContent {
  content: string;
  keyPoints: string[];
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  level: number;
  children?: MindMapNode[];
  x?: number;
  y?: number;
  color?: string;
}

export interface MindMapData {
  title: string;
  nodes: MindMapNode[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  photoURL: string;
  picture?: string; // Optional, for backward compatibility
}

export interface FirestoreTimestamp {
  toMillis(): number;
}

export interface StudyPlanDocument {
  id: string;
  userId: string;
  goal: string;
  response: StudyPlanResponse;
  createdAt: FirestoreTimestamp;
}

export interface HistoryItem {
  id: string;
  userId: string;
  goal: string;
  response: StudyPlanResponse;
  timestamp: number;
}

export interface FirestoreTimestamp {
  toMillis(): number;
}

export interface StudyPlanDocument {
  id: string;
  userId: string;
  goal: string;
  response: StudyPlanResponse;
  createdAt: FirestoreTimestamp;
}

export interface StudyPlanResponse {
  studyPlan: StudyDay[];
  resources: Resource[];
  wellnessTips: string[];
  sources?: Source[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  id: string;
  userId: string;
  messages: ChatMessage[];
  title: string;
  createdAt: number;
  updatedAt: number;
}
