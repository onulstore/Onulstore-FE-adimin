import React, { useEffect, useRef, forwardRef } from 'react';
import * as S from './style';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { LeftIcon, OnSaleIcon, RightIcon, SortIcon, StopSellingIcon } from 'components/icons';
import Select from 'components/ui/BrandSelect';

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

const ItemTable = ({ columns, data }: any) => {
  const [cookies] = useCookies();

  const navigate = useNavigate();
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
                    case '아이템 이름':
                      return (
                        <td {...cell.getCellProps()}>
                          <div className="item-title">
                            <img
                              src={`https://onulstorebucket.s3.ap-northeast-2.amazonaws.com/${row.original.productImage[0]?.imageName}`}
                            />
                            <div
                              onClick={() => {
                                navigate(`${row.original.id}`);
                              }}
                            >
                              {cell.render('Cell')}
                            </div>
                          </div>
                        </td>
                      );

                    case '판매상태변경':
                      return (
                        <td>
                          <div className="sale-status">
                            <select>
                              <option>판매중</option>
                              <option>판매중단</option>
                            </select>
                          </div>
                        </td>
                      );
                    case '판매상태':
                      return (
                        <td>
                          <div>{cell.value === 'SALE' ? <OnSaleIcon /> : <StopSellingIcon />}</div>
                        </td>
                      );
                    case '삭제하기(임시)':
                      return (
                        <td>
                          <div></div>
                        </td>
                      );

                    case '할인금액':
                      const { originalPrice, price } = row.original;
                      return (
                        <td>
                          <div>
                            {' '}
                            ¥
                            {(originalPrice - price)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </div>
                        </td>
                      );

                    case '판매가격':
                      return (
                        <td>
                          <div>
                            {' '}
                            ¥
                            {row.original.originalPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </div>
                        </td>
                      );

                    case '총 가치':
                      return (
                        <td>
                          <div>
                            ¥
                            {row.original.totalPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </div>
                        </td>
                      );

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

export default ItemTable;
