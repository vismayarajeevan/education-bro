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
    name: 'BSC Nursing',
    image:'https://img.freepik.com/free-photo/men-women-hospital-gowns-hold-medical-equipment-their-hands_1157-41713.jpg?t=st=1744382909~exp=1744386509~hmac=d0dd50be9cc8afa1f78fa873e34711bface9327f33613facfe9ba2562a6dd751&w=1380',
    description: 'Nursing',
    locationId: '3'
  },
  {
    id: '2',
    name: 'BOT',
    image: 'https://img.freepik.com/free-photo/man-woman-sit-room-one-them-is-wearing-blue-shirt-other-is-wearing-blue-shirt_482257-64742.jpg?t=st=1744381947~exp=1744385547~hmac=b7573715ae8be6985175501427221993d8036e4a61b3f98e89e116eb30f790bf&w=1380',
    description: 'Bachelor of Occuptional Therapy',
    locationId: '3'
  },
  {
    id: '3',
    name: 'BPT',
    image: 'https://img.freepik.com/free-photo/physiotherapist-helping-female-patient-her-clinic_23-2149115563.jpg?t=st=1744382278~exp=1744385878~hmac=2637616f823b6f5bee943f2f2d25bb6e75110cc463e02bc92fb09c1ddbafcd3c&w=1380',
    description: 'Bachelor of Physiotherapy',
    locationId: '3'
  },
  {
    id: '4',
    name: 'BCA',
    image: 'https://img.freepik.com/free-photo/cloud-computing-data-management-concept_53876-127747.jpg?t=st=1744382390~exp=1744385990~hmac=1795b4bc3c1e5fc6c90f367bec7f4abd26106a2441722d179b9b016c5347afd7&w=1060',
    description: 'Computer Application',
    locationId: '3'
  },
  {
    id: '5',
    name: 'BSC AT & OT',
    image: 'https://img.freepik.com/free-photo/group-surgeons-wearing-safety-masks-performing-operation-medicine-concept-surgery-medicine-people-concept-group-surgeons-operation-operating-room-hospital_657921-1115.jpg?t=st=1744382503~exp=1744386103~hmac=9566d0cf78caa0ab45646bf2445bb19896502573f8a24eab3335dfef2ddf5ae1&w=1380',
    description: 'Anesthesia and Operation Theatre technology',
    locationId: '3'
  },
  {
    id: '6',
    name: 'BSC MIT',
    image: 'https://img.freepik.com/free-photo/hand-medical-glove-pointing-virtual-screen-medical-technology_53876-104200.jpg?t=st=1744382534~exp=1744386134~hmac=ac792b1246a761a6c0f5d190f128e68c2ddba115671f0276c5fe6a720661cc12&w=1380',
    description: 'Medical Imaging Technology',
    locationId: '3'
  },
  {
    id: '7',
    name: 'BASLP',
    image: 'https://img.freepik.com/free-photo/hearing-exam-otolaryngologist-doctor-checking-woman-s-ear-using-otoscope-auriscope-medical-clinic_657921-266.jpg?t=st=1744382632~exp=1744386232~hmac=fd52dc89cd9a0760bd249342f0b4aa11f3ff139818900993577165f4ebe4f883&w=1380',
    description: 'Bachelor of Audiology and Speech-Language Pathology',
    locationId: '3'
  },
  {
    id: '8',
    name: 'BBA',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    description: 'Business administration',
    locationId: '3'
  },
  {
    id: '9',
    name: 'GNM',
    image: 'https://img.freepik.com/free-photo/care-job-scene-with-young-patient-being-cared_23-2151224212.jpg?t=st=1744382747~exp=1744386347~hmac=ac9719020ef5ed36b41071e3705967f1241ff98f163493ef338ef15d316eed27&w=1380',
    description: 'General Nursing and Midwifery',
    locationId: '3'
  },
  {
    id: '10',
    name: 'MLT',
    image: 'https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?t=st=1744383099~exp=1744386699~hmac=5322f1b600735104380b9ca9562b30fa4b13760117b52e3482c1cacc1884bf5d&w=1380',
    description: 'Medical Laboratory Technology',
    locationId: '3'
  }

];

export const colleges = [
  {
    id: '1',
    name: 'Bangalore Institute of Technology',
    description: 'Premier engineering institution known for excellence',
    description: 'Premier engineering college with state-of-the-art research facilities',
    locationId: '3',
    courses: ['1', '2'],
   
  },
  {
    id: '2',
    name: 'Mumbai Technical Institute',
    description: 'Premier engineering institution known for excellence',
    description: 'Leading institution with industry partnerships and modern infrastructure',
    locationId: '3',
    courses: ['1'],
    
  },
  {
    id: '3',
    name: 'Mangalore College of Engineering',
    description: 'Premier engineering institution known for excellence',
    description: 'Top-ranked college known for excellence in mechanical engineering',
    locationId: '3',
    courses: ['4'],
  
  },
  {
    id: '4',
    name: 'Coimbatore Technology Institute',
    description: 'Premier engineering institution known for excellence',
    description: 'Advanced research center with focus on emerging technologies',
    locationId: '4',
    courses: ['5'],
   
  }
];