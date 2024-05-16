import React from 'react';
import Table from '../_components/Table/table';
import { columns, data } from './data';

const TableSection = () => {
  return (
    <div className="w-full">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default TableSection;
