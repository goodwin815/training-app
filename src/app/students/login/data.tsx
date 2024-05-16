import Actions from '@/app/_components/Table/actions';
import Profile from '@/app/_components/Table/profile';
import React from 'react';

export const data = [
  {
    col1: <Profile />,
    col2: 'Program 1',
    col3: 'Level 1',
    col4: 'Leslie Alexander',
    col5: <Actions withOutDelete link={'/students/update-info'} />,
  },
  {
    col1: <Profile />,
    col2: 'Program 1',
    col3: 'Level 1',
    col4: 'Leslie Alexander',
    col5: <Actions withOutDelete />,
  },
  {
    col1: <Profile />,
    col2: 'Program 1',
    col3: 'Level 1',
    col4: 'Leslie Alexander',
    col5: <Actions withOutDelete />,
  },
  {
    col1: <Profile />,
    col2: 'Program 1',
    col3: 'Level 1 ',
    col4: 'Leslie Alexander',
    col5: <Actions withOutDelete />,
  },
];

export const columns = [
  {
    Header: 'STUDENT NAME',
    accessor: 'col1',
  },
  {
    Header: 'PROGRAM',
    accessor: 'col2',
  },
  {
    Header: 'LEVEL NAME',
    accessor: 'col3',
  },
  {
    Header: 'GRADES',
    accessor: 'col4',
  },
  {
    Header: 'ACTION',
    accessor: 'col5',
  },
];
