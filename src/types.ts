export interface DriveFileItem {
  id: string;
  name: string;
  type: 'folder' | 'pdf' | 'doc' | 'ppt' | 'xls' | 'video';
  size?: string;
  itemsCount?: number;
  description?: string;
  subItems?: DriveFileItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  city?: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RecentBuyerNotification {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
  role: string;
}
