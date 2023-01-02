import * as React from 'react'
import Datas from '../../datas/employees.json'
import { useSelector } from "react-redux";
import './table.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
// const defaultData  = Datas

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
    header: () => 'First Name',
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => 'Last Name',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('startDate', {
    header: () => 'Start Date',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('department', {
    header: () => <span>Department</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('dateOfBirth', {
    header: () => 'Date of birth',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('street', {
    header: 'Street',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('city', {
    header: () => <span>City</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('state', {
    header: 'State',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('zipCode', {
    header: 'Zip Code',
    footer: info => info.column.id,
  }),
]

function Table() {
    const defaultData = useSelector((state) => state.employeeList);
    const [data, setData] = React.useState(() => [...defaultData])
    const [globalFilter, setGlobalFilter] = React.useState('')

  const table = useReactTable({
    data,
    columns,
    state: {
        globalFilter
      },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  })

  return (
    <div className="employee-table">
        <div className="employee-table-top">
            <span>
                Show <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                    >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                        {pageSize}
                        </option>
                    ))}
                </select> entries
            </span>
            <span>
            <div>
        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(String(e.target.value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        />
      </div>
            </span>
        </div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none employee-table-header'
                              : ' ',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted()] ?? ' ↕️'}
                        </div>
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <div>
            <span className="flex items-center gap-1">
            Page
                <strong>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </strong>
            
            </span>
        </div>
      </div>
      <div>Showing {table.getRowModel().rows.length} of {data.length} entries</div>
    </div>
  )
}

export default Table;