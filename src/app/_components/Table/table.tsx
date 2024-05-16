'use client';

/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable, Column } from 'react-table';

interface TableProps<T extends object> {
  // TODO : Fix type
  columns: any[];
  data: T[];
}

function Table<T extends object>({
  columns,
  data,
}: TableProps<T>): JSX.Element {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full rounded-3xl">
      <thead className="h-14 rounded-3xl bg-[#E1EFFE]">
        {headerGroups.map((headerGroup) => (
          <tr className="rounded-3xl" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                <p className="text-lg font-extralight uppercase tracking-wide text-gray-500">
                  {column.render('Header')}
                </p>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="h-32 border p-4" {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  className="flex-items-center justify-center text-center text-gray-600"
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
