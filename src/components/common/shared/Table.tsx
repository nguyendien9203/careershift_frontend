import React, { useState } from "react";

import Pagination from "./Pagination";
import Checkbox from "./Checkbox";
import { Column } from "../../../types/column";

interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
  totalPages: number;
  totalRows: number;
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  handleRowsPerPageChange?: (rowsPage: number) => void;
  selectedRows?: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  totalPages,
  totalRows,
  rowsPerPageOptions = [5, 10, 20],
  rowsPerPage,
  currentPage,
  handlePageChange,
  handleRowsPerPageChange,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleSelectRow = (rowId: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(rowId)) {
      newSelectedRows.delete(rowId);
    } else {
      newSelectedRows.add(rowId);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAllRows = (isChecked: boolean) => {
    if (isChecked) {
      const allRows = new Set(data.map((row) => row.id));
      setSelectedRows(allRows);
    } else {
      setSelectedRows(new Set());
    }
  };

  const isAllSelected = data.every((row) =>
    selectedRows.has(row.id)
  );

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-secondary-100 text-left font-normal text-secondary-700">
              <th className="pl-2">
                <Checkbox
                  checked={isAllSelected}
                  onChange={(checked) => handleSelectAllRows(checked)}
                />
              </th>
              {columns.map((column: Column) => (
                <th
                  key={column.key}
                  className={`px-4 py-2 ${column.classes || ""}`}
                >
                  <span>{column.title}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row,) => (
              <tr
                key={row.id}
                className="border-b border-secondary-100 hover:bg-slate-100 text-left"
              >
                <th className="p-2">
                  <Checkbox
                    checked={selectedRows.has(row.id)}
                    onChange={(checked) => handleSelectRow(row.id)}
                  />
                </th>
                {columns.map((column: Column) => (
                  <td
                    key={column.key}
                    className={`px-4 py-2 ${column.classes || ""}`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <Pagination
        totalPages={totalPages}
        totalRows={totalRows}
        rowsPerPageOptions={rowsPerPageOptions}
        currentRowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        selectedRows={selectedRows.size}
      />
    </div>
  );
};

export default Table;
