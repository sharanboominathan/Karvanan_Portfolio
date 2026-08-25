// Centralized content sourced exactly from S. Karvannan's resume.
// No invented clients, awards, brands, or projects.

export const profile = {
  name: 'S. Karvannan',
  title: 'Photographer • Videographer • Cinematographer',
  phone: '9962446807',
  email: 'smartboykaran998@gmail.com',
  location: 'KasI medu, Royapuram, Chennai – 600013',
  summary:
    'Creative and dedicated photography and videography professional with 4 years of hands-on experience. Experienced in candid photography, traditional photography, traditional videography and cinematography, with basic video editing skills in DaVinci Resolve.',
}

export const experienceAreas = [
  'Candid Photography',
  'Traditional Photography',
  'Traditional Videography',
  'Cinematography',
  'DaVinci Resolve Editor – Basic Video Editing',
]

export const services = [
  {
    id: '01',
    title: 'Candid Photography',
    desc: 'Capture natural moments, emotions and authentic experiences.',
  },
  {
    id: '02',
    title: 'Traditional Photography',
    desc: 'Professional event and traditional photography.',
  },
  {
    id: '03',
    title: 'Traditional Videography',
    desc: 'Document events through cinematic video storytelling.',
  },
  {
    id: '04',
    title: 'Cinematography',
    desc: 'Create visually compelling cinematic sequences.',
  },
  {
    id: '05',
    title: 'Video Editing',
    desc: 'Basic video editing workflow using DaVinci Resolve.',
  },
]

export const skillGroups = [
  {
    category: 'Photography & Videography',
    items: ['Candid Photography', 'Traditional Photography', 'Traditional Videography', 'Cinematography', 'DaVinci Resolve – Basic Video Editing'],
  },
  {
    category: 'MS Office',
    items: ['PowerPoint', 'Excel'],
  },
]

export const education = [
  {
    course: 'B.Sc. Zoology',
    institution: 'Sri Theagaraya College',
    year: '2021',
    percentage: '75%',
  },
  {
    course: 'H.S.C',
    institution: 'Chennai Hr. Sec. School, Lakshmi Kovil',
    year: '2016',
    percentage: '53%',
  },
  {
    course: 'S.S.L.C',
    institution: 'Chennai High School, S.N. Chetty',
    year: '2018',
    percentage: '50%',
  },
]

export const strengths = [
  'Willing to work hard and learn new skills',
  'Positive attitude, honest and sincere',
  'Innovative and motivating',
  'Believes in hard work',
]

import videoHighlight01 from './assets/video-highlight-01.mp4'
import videoHighlight02 from './assets/video-highlight-02.mp4'
import videoHighlight03 from './assets/video-highlight-03.mp4'
import videoHighlight04 from './assets/video-highlight-04.mp4'
import bharatham01 from './assets/bharatham-01.mov'
import bharatham02 from './assets/bharatham-02.mov'

export const portfolioCategories = ['All', 'Videography', 'Cinematography']

export const portfolioItems = [
  { id: 1, category: 'Videography', title: 'Event Storytelling', tall: false, video: videoHighlight01 },
  { id: 2, category: 'Cinematography', title: 'Cinematic Sequences', tall: true, video: videoHighlight02 },
  { id: 3, category: 'Cinematography', title: 'Visual Narratives', tall: false, video: bharatham01 },
  { id: 4, category: 'Videography', title: 'Documented Occasions', tall: true, video: bharatham02 },
  { id: 5, category: 'Cinematography', title: 'Motion & Light', tall: false, video: videoHighlight03 },
  { id: 6, category: 'Videography', title: 'Highlight Reel', tall: false, video: videoHighlight04 },
]
