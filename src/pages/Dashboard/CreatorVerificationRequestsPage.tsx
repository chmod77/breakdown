import React, { useEffect, useState } from 'react'
import { getVerificationRequests } from '../../services/rest'
import { Table } from '../sections'
import RootPage from './RootPage'

//@ts-ignore
import { useTable, useSortBy } from 'react-table'

export default function CreatorVerificationRequestsPage() {
  const [requests, setRequests] = useState<null | any | []>([])

  const onLoad = async () => {
    let verificationRequests = await getVerificationRequests()
    if (verificationRequests?.success) {
      setRequests(verificationRequests?.requests)

    }
  }
  const data = React.useMemo(() => requests, [requests])

  /**
   * {
            "id": 2,
            "user_id": 2,
            "known_as": "Tester",
            "channel_id": "2",
            "tier": 1,
            "status": 0,
            "proof_of_work": "www.me.co",
            "video": "https://breakdown-bucket.s3.amazonaws.com/verifications/lSxdM6iOp8oeRWdy9eBJ6TMkEvB8gQ0AlsN5WFv9.mp4",
            "photo_id": "https://breakdown-bucket.s3.amazonaws.com/verifications/cxSRngZ95rBTkCi6O0kRDjwuWaOFsoQyiP2PLlV1.jpg",
            "created_at": "2022-09-08T16:20:26.000000Z",
            "updated_at": "2022-10-06T23:16:04.000000Z"
        }
   */
  const columns = React.useMemo(
    () => [

      {
        Header: 'Tier Type',
        accessor: 'tier',
      },
      {
        Header: "Category Affiliations",
        accessor: 'channel_id'
      },
      {
        Header: "Date",
        accessor: 'created_at'
      },
      {
        Header: "Action"
      }
    ],
    []
  )

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   page,
  //   canPreviousPage,
  //   canNextPage,
  //   pageOptions,
  //   pageCount,
  //   gotoPage,
  //   nextPage,
  //   previousPage,
  //   setPageSize,
  //   state: { pageIndex, pageSize },

  // }: any  = useTable({ columns, data, initialState: { pageIndex: 0 }, usePagination})
  const tableInstance = useTable({ columns, data }, useSortBy)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: any = useTable({ columns, data },
    useSortBy,
    (hooks: any) => {
      hooks.visibleColumns.push((columns: any) => [
        {
          Header: "User",
          id: 'view',
          Cell: ({ row }: any) => (
            <div onClick={() => console.log(row)}>

              {
                row.original.photo_id ? (
                  <>
                    <img src={row.original.photo_id} style={{
                      height: 40, width: 40, borderRadius: 50
                    }} />
                    <span className="align-middle" style={{
                      marginLeft: 10
                    }}>{row.original.known_as}</span>
                  </>
                ) : (
                  <>
                    <img src={"assets/images/user-vector.png"} style={{
                      height: 40, width: 40, borderRadius: 50
                    }} />
                    <span className="align-middle" style={{
                      marginLeft: 10
                    }}>{row.original.known_as}</span>

                  </>

                )

              }


            </div>
          )
        },

        ...columns,

      ])

    }

  )
  useEffect(() => {
    onLoad()
  }, [])
  return (
    <RootPage>



      <Table title={"Creator Verification Requests"}>

        <table {...getTableProps()} className="table align-middle table-nowrap mb-0">
          <thead>

            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps()}
                    scope="col" style={{
                      fontFamily: "Roboto"
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}

                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* 
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div> */}


      </Table>
    </RootPage>
  )
}
