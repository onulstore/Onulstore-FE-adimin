import React, { useEffect, useRef, forwardRef } from 'react';
import * as S from './style';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { CalenderIcon } from 'components/icons';
import ToggleSwitch from 'components/ui/ToggleSwitch';
import { Link } from 'react-router-dom';
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

const CurationTable = ({ columns, data }) => {
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
            // console.log('행', row.original);
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // console.log('셀', cell);
                  switch (cell.column.Header) {
                    case '최종수정시간':
                      return <td>API에 정보 없음</td>;

                    case '매거진 공개':
                      return (
                        <td>
                          <ToggleSwitch />
                          API에 정보 없음
                        </td>
                      );

                    case '매거진 제목':
                      return (
                        <td>
                          <Link
                            style={{ color: 'green', textDecoration: 'underline' }}
                            to={`${row.original.id}`}
                          >
                            {row.original.title}
                          </Link>
                        </td>
                      );
                    case '큐레이션 아이템1':
                      return <td>API에 정보 없음</td>;
                    case '큐레이션 아이템2':
                      return <td>API에 정보 없음</td>;

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

export default CurationTable;
