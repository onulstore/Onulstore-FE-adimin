import MagazineTable from 'components/MagazineTable';
import React, { useState, useMemo, useEffect } from 'react';
import * as S from './style';
import axios from 'axios';

const MagazineConfig = () => {
  const [todayData, setTodayData] = useState([]);
  console.log('todayData', todayData);
  // const token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NjQ5MDM4ODB9.mnz-RTYc8Qmb5Bhhz_eE-VxKh7Z57iGdTBsSGuYhtDoYYD3yteoAzIORc6rBCZkATBjBpvoUFruALl2WQe7LdA`;
  const columns = useMemo(
    () => [
      {
        Header: '최종수정시간',
        accessor: '', //항목 없음
      },
      {
        Header: '매거진 공개',
        accessor: '', // 항목 없음
      },
      {
        Header: '매거진 제목',
        accessor: 'title',
      },
      {
        Header: '매거진 본문',
        accessor: 'content',
      },
      {
        Header: '큐레이션 아이템1',
        accessor: '',
      },
      {
        Header: '큐레이션 아이템2',
        accessor: '',
      },
    ],
    [],
  );

  const getMagazines = async () => {
    const res = await axios({
      url: `http://onulstore.dlcpop.com/curations/magazine?page=${0}&size=${100}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    });

    console.log('매거진', res.data.content);

    const itemData = res.data.content;

    setTodayData(itemData);
  };

  useEffect(() => {
    getMagazines();
  }, []);

  return (
    <S.Container>
      <div className="title">
        <div>매거진 설정</div>
        <button> + 새 매거진 등록</button>
      </div>
      <div className="info">
        <div className="info-left">
          <div className="info-left-icon">폴더아이콘</div>
          <div className="info-left-stat">
            <div>
              <div>공개된 매거진</div>
              <div>3(임시)</div>
            </div>
            <div>
              <div>비공개 매거진</div>
              <div>12(임시)</div>
            </div>
          </div>
        </div>
        <div className="info-right">
          <div className="info-right-icon">사람 아이콘</div>
          <div className="info-right-stat">
            <div>
              <div>품절임박 아이템수</div>
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
      <MagazineTable data={todayData} columns={columns} />
    </S.Container>
  );
};

export default MagazineConfig;
