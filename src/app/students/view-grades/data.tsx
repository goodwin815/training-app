import Actions from '@/app/_components/Table/actions';
import Profile from '@/app/_components/Table/profile';
import React from 'react';

export const data = [
  {
    col1: <Profile />,
    col2: 'A+',
    col3: 'Level 1',
  },
  {
    col1: <Profile />,
    col2: 'A+',
    col3: 'Level 1',
  },
  {
    col1: <Profile />,
    col2: 'A+',
    col3: 'Level 1',
  },
  {
    col1: <Profile />,
    col2: 'A+',
    col3: 'Level 1 ',
  },
];

export const columns = [
  {
    Header: 'STUDENT NAME',
    accessor: 'col1',
  },
  {
    Header: 'GRADE',
    accessor: 'col2',
  },
  {
    Header: 'LEVEL NAME',
    accessor: 'col3',
  },
];
