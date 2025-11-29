import { Retailer } from '@/types';

export const retailers: Retailer[] = [
  {
    id: 'nanotek',
    name: 'Nanotek',
    website: 'https://nanotek.lk',
  },
  {
    id: 'redline',
    name: 'Red Line Technologies',
    website: 'https://redline.lk',
  },
  {
    id: 'barclays',
    name: 'Barclays Technologies',
    website: 'https://barclays.lk',
  },
  {
    id: 'techsurge',
    name: 'TechSurge',
    website: 'https://techsurge.lk',
  },
  {
    id: 'pchouse',
    name: 'PC House',
    website: 'https://pchouse.lk',
  },
];

export function getRetailerById(id: string): Retailer | undefined {
  return retailers.find(r => r.id === id);
}
