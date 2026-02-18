// src/data/mockData.js

export const currentUser = {
  id: 'u-current',
  name: 'Adewale Johnson',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adewale',
  trustScore: 98,
  skillsOffered: ['Graphic Design', 'Logo Design'],
  skillsNeeded: ['Web Development', 'Photography'],
};

export const mockExchanges = [
  {
    id: 'ex-101',
    partnerName: 'Blessing Oluwaseun',
    partnerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing',
    giving: 'Logo Design',
    receiving: 'React Website',
    status: 'In Progress', // Pending, In Progress, Completed, Disputed
    updatedAt: '2 hours ago',
    type: 'outgoing' 
  },
  {
    id: 'ex-102',
    partnerName: 'Tunde Akinola',
    partnerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde',
    giving: 'Brand Identity',
    receiving: 'Math Tutoring',
    status: 'Pending',
    updatedAt: '5 mins ago',
    type: 'incoming'
  }
];

export const mockMyServices = [
  {
    id: 's1',
    title: 'Professional Logo Design',
    status: 'Available',
    views: 124,
    category: 'Design'
  }
];

// Suggested matches based on user's "skillsNeeded" (Web Dev/Photography)
export const mockSuggestions = [
  {
    id: 's2',
    userName: 'Blessing Oluwaseun',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing',
    title: 'Fullstack React Development',
    skillOffered: 'Web Development',
    skillNeeded: 'Graphic Design',
    location: 'Ogbomosho, Oyo'
  },
  {
    id: 's5',
    userName: 'Funmi Adebayo',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Funmi',
    title: 'Event Photography',
    skillOffered: 'Photography',
    skillNeeded: 'Social Media Management',
    location: 'Ibadan, Oyo'
  }
];

export const mockServices = [
  {
    id: 's1',
    userId: 'u-current', // Matches current user
    userName: 'Adewale Johnson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adewale',
    title: 'Professional Logo Design',
    description: 'I will create a modern minimalist logo for your startup or brand.',
    skillOffered: 'Graphic Design',
    skillNeeded: 'React Development',
    location: 'Ibadan, Oyo',
    category: 'Design',
    duration: '3-5 Days'
  },
  {
    id: 's2',
    userId: 'u-102',
    userName: 'Blessing Oluwaseun',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing',
    title: 'Fullstack React Development',
    description: 'Expert web development. Looking to trade for brand identity services.',
    skillOffered: 'Web Development',
    skillNeeded: 'Graphic Design',
    location: 'Ogbomosho, Oyo',
    category: 'Tech',
    duration: '1 Week'
  }
];

export const mockUsers = [
  currentUser,
  {
    id: 'u-102',
    name: 'Blessing Oluwaseun',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing',
    rating: 4.8,
    completedSwaps: 8,
    location: 'Ogbomosho, Oyo',
    bio: 'Software engineer interested in aesthetics.',
    skillsOffered: ['Web Development'],
    skillsNeeded: ['Graphic Design']
  }
];

export const categories = [
  { name: 'All', icon: '✨', color: 'bg-slate-900' },
  { name: 'Tech', icon: '💻', color: 'bg-blue-500' },
  { name: 'Design', icon: '🎨', color: 'bg-purple-500' },
  { name: 'Fashion', icon: '✂️', color: 'bg-pink-500' },
  { name: 'Education', icon: '📚', color: 'bg-amber-500' },
  { name: 'Media', icon: '📸', color: 'bg-red-500' },
  { name: 'Business', icon: '💼', color: 'bg-emerald-500' },
  { name: 'Lifestyle', icon: '🌱', color: 'bg-cyan-500' },
  { name: 'others', icon: ':D', color: 'bg-amber-500' },
];

export const mockNotifications = [
  ];