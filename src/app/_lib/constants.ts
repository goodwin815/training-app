import { ILink } from './types';

export const header_links: ILink[] = [
  { name: 'Home', path: '/', sublinks: false },
  { name: 'Programs', path: '/programs', sublinks: false },
  { name: 'Online Tests', path: '/online-tests', sublinks: false },
  { name: 'Mentors', path: '/mentors', sublinks: false },
  {
    name: 'Students',
    path: '',
    sublinks: true,
    sublinksArray: [
      { name: 'Create a New Account', path: '/students/create' },
      { name: 'Access Student Portal', path: '/students/login' },
    ],
  },
];

export const footer_links: ILink[] = [
  { name: 'Online Tests', path: '/' },
  { name: 'Programs', path: '/' },
  { name: 'Mentors', path: '/' },
  { name: 'Students', path: '/' },
];
