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