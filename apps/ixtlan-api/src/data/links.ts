export interface Link {
  id: string;
  title: string;
  value: string;
  visible: boolean;
  dateCreated: string;
  lastUpdate: null;
  type: string;
}

export const links: Link[] = [
  {
    id: '1',
    title: 'bandcamp',
    value: 'https://ixtlanmusic.bandcamp.com/',
    visible: true,
    dateCreated: '2023-01-08T02:35:06.060Z',
    lastUpdate: null,
    type: 'music',
  },
  {
    id: '2',
    title: 'twitter',
    value: 'https://twitter.com/_ixtlan',
    visible: true,
    dateCreated: '2023-01-08T02:35:06.060Z',
    lastUpdate: null,
    type: 'social',
  },
  {
    id: '3',
    title: 'instagram',
    value: 'https://instagram.com/ixtlan.io',
    visible: true,
    dateCreated: '2023-01-08T02:35:06.060Z',
    lastUpdate: null,
    type: 'social',
  },
];
