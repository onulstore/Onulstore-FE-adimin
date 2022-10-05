import Table from 'components/Table';
import * as S from './style';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

const itemManagement = () => {
  const [data, setdata] = useState([]);
  console.log('data', data);
  const token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NjQ5MDM4ODB9.mnz-RTYc8Qmb5Bhhz_eE-VxKh7Z57iGdTBsSGuYhtDoYYD3yteoAzIORc6rBCZkATBjBpvoUFruALl2WQe7LdA`;
  const columns = useMemo(
    () => [
      {
        Header: '아이템 이름', // 테이블 헤더에 보여줄 텍스트 명시
        accessor: 'productName', // accessor 속성에는 해당 열이 data 객체의 어느 속성을 읽어야 하는지 명시했습니다
      },
      {
        Header: '카테고리',
        accessor: 'category.categoryName',
      },
      {
        Header: '판매가격',
        accessor: 'price',
      },
      {
        Header: '재고량',
        accessor: 'quantity',
      },
      {
        Header: '할인금액',
        accessor: '할인', //
      },
      {
        Header: '총 가치',
        accessor: 'totalPrice', //
      },
      {
        Header: '판매 상태 변경',
        accessor: 'what', //
      },
      {
        Header: '판매상태',
        accessor: 'productStatus',
      },
    ],
    [],
  );

  const getItems = async () => {
    const res = await axios({
      url: `http://onulstore.dlcpop.com/products/list?page=${0}&size=${100}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = res.data.content;

    console.log(responseData);
    const tableData = responseData?.map((item) => {
      const { price, quantity } = item;

      return { ...item, totalPrice: price * quantity };
    });
    console.log(tableData);

    setdata(tableData);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <S.Container>
      <div>아이템 현황</div>
      <div>
        <div>
          등록된 아이템: {data.length}/ 판매중인 아이템:
          {data.filter((item) => item.productStatus === 'SALE').length}
        </div>
        <div>
          재고 없음 근접(기준 100이하): {data.filter((item) => item.quantity <= 100).length} / 재고
          없음: {data.filter((item) => item.quantity === 0).length} / 평점 1점
        </div>
      </div>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </S.Container>
  );
};

export default itemManagement;
