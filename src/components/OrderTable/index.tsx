import React, { useEffect, useRef, forwardRef } from 'react';
import * as S from './style';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LeftIcon, OnSaleIcon, RightIcon, SortIcon, StopSellingIcon } from 'components/icons';
import { Link } from 'react-router-dom';

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }: any, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    (resolvedRef as any).current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <S.CheckBox type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

const OrderTable = ({ columns, data }: any) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 } as any,
    },

    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',

          Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
            <div className="header-check">
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...(row as any).getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );

  return (
    <S.Container>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div>
                    <span className="header-title">{column.render('Header')}</span>
                    {!(column.id === 'selection') && (
                      <span>
                        <SortIcon />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  // console.log('row', row.original);

                  switch (cell.column.Header) {
                    // case '총 가치':
                    //   return (
                    //     <td>
                    //       <div>
                    //         ¥
                    //         {row.original.totalPrice
                    //           .toString()
                    //           .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    //       </div>
                    //     </td>
                    //   );

                    default:
                      return (
                        <td {...cell.getCellProps()}>
                          <div>{cell.render('Cell')}</div>
                        </td>
                      );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <S.PageSize>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>건씩 보기</span>
        </S.PageSize>

        {/* <S.PageIndicator>
          <strong>
            {pageIndex + 1} 페이지 / 총 {pageOptions.length} 페이지
          </strong>{' '}
        </S.PageIndicator> */}
        <S.Right>
          <S.PageNavigator>
            <input
              type="number"
              // defaultValue={pageIndex + 1}
              value={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
            / {pageOptions.length} 페이지
          </S.PageNavigator>
          <S.PageController>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <LeftIcon />
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <RightIcon />
            </button>
          </S.PageController>
        </S.Right>
      </div>
    </S.Container>
  );
};

export default OrderTable;
