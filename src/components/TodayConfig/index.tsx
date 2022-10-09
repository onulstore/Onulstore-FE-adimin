import TodayTable from 'components/TodayTable';
import React, { useState, useMemo, useEffect } from 'react';
import * as S from './style';
import axios from 'axios';
import TodayModal from 'components/TodayModal';

const TodayConfig = () => {
  const [todayData, setTodayData] = useState([]);
  const [modal, setModal] = useState(false);
  console.log('modal', modal);
  const token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NjQ5MDM4ODB9.mnz-RTYc8Qmb5Bhhz_eE-VxKh7Z57iGdTBsSGuYhtDoYYD3yteoAzIORc6rBCZkATBjBpvoUFruALl2WQe7LdA`;
  const columns = useMemo(
    () => [
      {
        Header: '아이템 이름',
        accessor: 'productName',
      },
      {
        Header: '정상 판매가격',
        accessor: 'price',
      },
      {
        Header: '오늘만 할인 여부',
        accessor: '',
      },
      {
        Header: '오늘만 할인 판매가격',
        accessor: '',
      },
      {
        Header: '오늘만 할인 날짜',
        accessor: '', //
      },
      {
        Header: '오늘만 할인 공개',
        accessor: '', //
      },
      {
        Header: '판매상태변경',
        accessor: '', //
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

    const itemData = res.data.content;

    setTodayData(itemData);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <S.Container>
      <div className="title">오늘만 할인 아이템 설정</div>
      <div className="info">
        <div className="info-left">
          <div className="info-left-icon">폴더아이콘</div>
          <div className="info-left-stat">
            <div>
              <div>오늘만 할인 공개중 아이템</div>
              <div>5(임시)</div>
            </div>
            <div>
              <div>오늘만 할인 비공개 아이템</div>
              <div>12(임시)</div>
            </div>
          </div>
        </div>
        <div className="info-right">
          <div className="info-right-icon">사람 아이콘</div>
          <div className="info-right-stat">
            <div>
              <div>오늘만 할인 아이템 판매수</div>
              <div>23(임시)</div>
            </div>
            <div>
              <div>재고 없음</div>
              <div>3(임시)</div>
            </div>
            <div>
              <div>평점 1점</div>
              <div>2(임시)</div>
            </div>
          </div>
        </div>
      </div>
      <TodayTable data={todayData} columns={columns} setModal={setModal} />
      {modal && <TodayModal setModal={setModal} />}
    </S.Container>
  );
};

export default TodayConfig;
