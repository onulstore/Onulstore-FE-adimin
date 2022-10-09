import React, { useEffect, useRef, forwardRef } from 'react';
import * as S from './style';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { CalenderIcon } from 'components/icons';
import ToggleSwitch from 'components/ui/ToggleSwitch';
const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

const TodayTable = ({ columns, data, setModal }) => {
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
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
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
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            // console.log('행', row);
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // console.log('셀', cell);
                  switch (cell.column.Header) {
                    case '아이템 이름':
                      return (
                        <td {...cell.getCellProps()}>
                          <div onClick={() => setModal(true)}>{cell.render('Cell')}ㅇㅇㅇ</div>
                        </td>
                      );

                    case '오늘만 할인 여부':
                      return (
                        <td>
                          <select>
                            <option>(가짜)오늘만 할인</option>
                            <option>(가짜)일반판매</option>
                          </select>
                        </td>
                      );
                    case '오늘만 할인 날짜':
                      return (
                        <td>
                          <CalenderIcon />
                        </td>
                      );
                    case '오늘만 할인 공개':
                      return (
                        <td>
                          <ToggleSwitch />
                          <div>가짜</div>
                        </td>
                      );
                    case '판매상태변경':
                      return (
                        <td>
                          <select>
                            <option>(가짜)판매중단하기</option>
                            <option>(가짜)판매하기</option>
                          </select>
                        </td>
                      );
                    case '판매상태':
                      return <td>{cell.value === 'SALE' ? '판매중' : '판매중단'}</td>;
                    default:
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
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
          건씩 보기
        </S.PageSize>
        <S.PageIndicator>
          <strong>
            {pageIndex + 1} 페이지 / 총 {pageOptions.length} 페이지
          </strong>{' '}
        </S.PageIndicator>
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
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
        </S.PageController>
      </div>
    </S.Container>
  );
};

export default TodayTable;
