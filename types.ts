export interface User {
  id: string;
  name: string;
  handle: string;
  location: string;
  avatar: string;
  bio: string;
  rating: number;
  reviewCount: number;
  skillsOffered: Skill[];
  skillsNeeded: Skill[];
}

export interface Skill {
  id: string;
  title: string;
  category: 'Creative' | 'Technical' | 'Home & Garden' | 'Wellness' | 'Languages' | 'Professional';
  description: string;
  type: 'Offer' | 'Request';
  user?: User;
  matches?: number;
  image?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  type: 'text' | 'system';
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: Message;
  subject: string;
  status: 'Active' | 'Pending' | 'Completed';
}
