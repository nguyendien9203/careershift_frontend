import React from "react";

import Select from "./Select";
import Button from "./Button";

interface PaginationProps {
  totalPages: number;
  totalRows: number;
  rowsPerPageOptions?: number[];
  currentRowsPerPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange?: (rowsPage: number) => void;
  selectedRows?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  totalRows,
  rowsPerPageOptions = [],
  currentRowsPerPage,
  currentPage,
  onPageChange,
  onRowsPerPageChange,
  selectedRows,
}) => {

  const rowsPerPageOptionsFormatted = rowsPerPageOptions.map((option) => ({
    value: option.toString(),
    label: option.toString(),
  }));

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  console.log("Current page in Pagination:", currentPage);
  console.log("Total rows in Pagination:", totalRows);

  return (
    <div
      className={`flex items-center ${
        selectedRows !== undefined ? "justify-between" : "justify-end"
      } p-2`}
    >
      {/* Left content */}
      {selectedRows !== undefined && (
        <div>
          <p className="text-sm text-black">{`${selectedRows} trên ${totalRows} hàng được chọn`}</p>
        </div>
      )}

      {/* Right content */}
      <div className="flex items-center gap-x-6 ml-auto">
        {rowsPerPageOptions.length > 0 && currentRowsPerPage && onRowsPerPageChange && (
          <div className="flex items-center gap-x-2">
            <div className="text-sm text-black">Hàng mỗi trang:</div>
            <Select
              options={rowsPerPageOptionsFormatted}
              value={currentRowsPerPage.toString()}
              onChange={(value) => onRowsPerPageChange(Number(value))}
              size="small"
              className="w-auto"
            />
          </div>
        )}

        <div className="flex items-center gap-x-2">
          <div className="text-sm text-black">
            Trang {currentPage} trên {totalPages}
          </div>

          <div className="flex items-center gap-x-2">
            {/* First Page Button */}
            <Button
              variant="light"
              size="small"
              icon="bi-chevron-double-left"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            />

            {/* Previous Page Button */}
            <Button
              variant="light"
              size="small"
              icon="bi-chevron-left"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />

            {/* Next Page Button */}
            <Button
              variant="light"
              size="small"
              icon="bi-chevron-right"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />

            {/* Last Page Button */}
            <Button
              variant="light"
              size="small"
              icon="bi-chevron-double-right"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
