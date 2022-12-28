import * as React from 'react'
import './table.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'


const defaultData  = [
    { 
        firstName: "Tony", 
        lastName: "Stark", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Steve", 
        lastName: "Roger", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Human Resources", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Peter", 
        lastName: "Parker", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Thor", 
        lastName: "Hodinson", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Natasha", 
        lastName: "Romanoff", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Legal", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },    { 
        firstName: "Tony", 
        lastName: "Stark", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Steve", 
        lastName: "Roger", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Human Resources", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Peter", 
        lastName: "Parker", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Thor", 
        lastName: "Hodinson", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Natasha", 
        lastName: "Romanoff", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Legal", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },    { 
        firstName: "Tony", 
        lastName: "Stark", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Steve", 
        lastName: "Roger", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Human Resources", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Peter", 
        lastName: "Parker", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Thor", 
        lastName: "Hodinson", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Engineering", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
    { 
        firstName: "Natasha", 
        lastName: "Romanoff", 
        dateOfBirth: "2001-03-21", 
        startDate: "2022-12-28", 
        department: "Legal", 
        street: "5th Street", 
        city: "Manathan", 
        state: "NY", 
        zipCode: "35000" 
    },
]

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
     const [data, setData] = React.useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
            <span>Search</span>
        </div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
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
      <div>Showing {table.getRowModel().rows.length} entries</div>
    </div>
  )
}

export default Table;