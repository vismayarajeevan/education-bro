// import { Location, Course, College } from './types';

export const locations = [
  {
    id: '1',
    name: 'Bangalore',
    image: 'https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-833.jpg?t=st=1741668621~exp=1741672221~hmac=4d6ccb18082bd7545e235e6e3fa864d6f0827f1b602df5abf103f0b16906f716&w=740',
    description: 'India\'s Silicon Valley with top-tier tech institutions and research centers'
  },
  {
    id: '2',
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1200',
    description: 'The financial capital offering diverse educational opportunities'
  },
  {
    id: '3',
    name: 'Mangalore',
    image: 'https://img.freepik.com/free-photo/vertical-shot-buildings-cloudy-sky_181624-15055.jpg?t=st=1741669006~exp=1741672606~hmac=907e719f2a91c1e41c86e17218375cd3048d6315971c89f0d7183961e82176aa&w=740',
    description: 'Coastal education hub known for medical and engineering colleges'
  },
  {
    id: '4',
    name: 'Coimbatore',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200',
    description: 'Manchester of South India with prestigious educational institutions'
  }
];

export const courses = [
  {
    id: '1',
    name: 'Computer Science Engineering',
    duration: '4 years',
    description: 'B.Tech in Computer Science with specialization in AI and Machine Learning',
    locationId: '1'
  },
  {
    id: '2',
    name: 'Information Technology',
    duration: '4 years',
    description: 'B.Tech in IT with focus on software development and cloud computing',
    locationId: '1'
  },
  {
    id: '3',
    name: 'Electronics Engineering',
    duration: '4 years',
    description: 'B.Tech in Electronics with emphasis on VLSI and embedded systems',
    locationId: '2'
  },
  {
    id: '4',
    name: 'Mechanical Engineering',
    duration: '4 years',
    description: 'B.Tech in Mechanical Engineering with modern manufacturing techniques',
    locationId: '3'
  },
  {
    id: '5',
    name: 'Data Science',
    duration: '2 years',
    description: 'M.Tech in Data Science with focus on big data and analytics',
    locationId: '4'
  }
];

export const colleges = [
  {
    id: '1',
    name: 'Bangalore Institute of Technology',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    description: 'Premier engineering college with state-of-the-art research facilities',
    locationId: '1',
    courses: ['1', '2'],
    phone: '919876543210'
  },
  {
    id: '2',
    name: 'Mumbai Technical Institute',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200',
    description: 'Leading institution with industry partnerships and modern infrastructure',
    locationId: '2',
    courses: ['3'],
    phone: '919876543211'
  },
  {
    id: '3',
    name: 'Mangalore College of Engineering',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1200',
    description: 'Top-ranked college known for excellence in mechanical engineering',
    locationId: '3',
    courses: ['4'],
    phone: '919876543212'
  },
  {
    id: '4',
    name: 'Coimbatore Technology Institute',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    description: 'Advanced research center with focus on emerging technologies',
    locationId: '4',
    courses: ['5'],
    phone: '919876543213'
  }
];