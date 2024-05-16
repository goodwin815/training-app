import React from 'react';
import Profile from '../_components/Table/profile';
import Actions from '../_components/Table/actions';
import Links from '../_components/Table/link';

export const data = [
  {
    col1: '1',
    col2: 'Level 1',
    col3: <Links />,
    col4: <Links />,
    col5: <Actions />,
  },
  {
    col1: '2',
    col2: 'Level 2',
    col3: <Links />,
    col4: <Links />,
    col5: <Actions />,
  },
  {
    col1: '3',
    col2: 'Level 3',
    col3: <Links />,
    col4: <Links />,
    col5: <Actions />,
  },
  {
    col1: '4',
    col2: 'Level 4',
    col3: <Links />,
    col4: <Links />,
    col5: <Actions />,
  },
];

export const columns = [
  {
    Header: 'lEVEL',
    accessor: 'col1',
  },
  {
    Header: 'Name of level',
    accessor: 'col2',
  },
  {
    Header: 'video allocation',
    accessor: 'col3',
  },
  {
    Header: 'pdf allocation',
    accessor: 'col4',
  },
  {
    Header: 'Action',
    accessor: 'col5',
  },
];
