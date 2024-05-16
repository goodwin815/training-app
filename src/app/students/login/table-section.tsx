import React from 'react';

import { columns, data } from './data';
import Table from '@/app/_components/Table/table';

const TableSection = () => {
  return (
    <div className="w-full">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default TableSection;
