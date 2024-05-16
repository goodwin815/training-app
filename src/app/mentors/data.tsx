import React from 'react';
import Profile from '../_components/Table/profile';
import Actions from '../_components/Table/actions';

export const data = [
  {
    col1: <Profile />,
    col2: '(907) 555-0101',
    col3: 'Naperville',
    col4: '8502 Preston Rd. Inglewood, Maine 98380',
    col5: <Actions link={'/mentors/update'} />,
  },
  {
    col1: <Profile />,
    col2: '(907) 555-0101',
    col3: 'Naperville',
    col4: '8502 Preston Rd. Inglewood, Maine 98380',
    col5: <Actions link={'/mentors/update'} />,
  },
  {
    col1: <Profile />,
    col2: '(907) 555-0101',
    col3: 'Naperville',
    col4: '8502 Preston Rd. Inglewood, Maine 98380',
    col5: <Actions link={'/mentors/update'} />,
  },
  {
    col1: <Profile />,
    col2: '(907) 555-0101',
    col3: 'Naperville',
    col4: '8502 Preston Rd. Inglewood, Maine 98380',
    col5: <Actions link={'/mentors/update'} />,
  },
];

export const columns = [
  {
    Header: 'MENTOR',
    accessor: 'col1',
  },
  {
    Header: 'PHONE',
    accessor: 'col2',
  },
  {
    Header: 'CITY',
    accessor: 'col3',
  },
  {
    Header: 'ADDRESS',
    accessor: 'col4',
  },
  {
    Header: 'ACTION',
    accessor: 'col5',
  },
];
