import ItemTable from 'components/ItemTable';
import * as S from './style';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { FakeManagementHeader, FolderIcon, PeopleIcon, PlusIcon } from 'components/icons';

const itemManagement = () => {
  const [data, setdata] = useState([]);
  console.log('data', data);
  const navigate = useNavigate();
  const [cookies] = useCookies();
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
        Header: '판매상태변경',
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
      url: `https://onulstore.breon.ml/products/list?pageNumber=0&pageSize=100`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
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
    <div>
      <FakeManagementHeader />
      <S.Container>
        <S.Top>
          <div className="top-title">아이템 현황</div>
          <button className="top-button" onClick={() => navigate('register')}>
            <PlusIcon />
            <span>새 아이템 등록</span>
          </button>
        </S.Top>
        <S.Info>
          <div className="info-left">
            <div className="icon">
              <FolderIcon />
            </div>
            <div className="bottom">
              <div className="regi-item">
                <div>등록된 아이템</div>
                <div>{data.length}</div>
              </div>
              <div className="sale-item">
                <div>판매중인 아이템</div>
                <div>
                  <span>{data.filter((item) => item.productStatus === 'SALE').length}</span>
                  <span>
                    {(data.filter((item) => item.productStatus === 'SALE').length / data.length) *
                      100}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="info-right">
            <div className="icon">
              <PeopleIcon />
            </div>
            <div className="bottom">
              <div className="stock">
                <div>재고 없음 근접</div>
                <div>{data.filter((item) => item.quantity <= 100).length}</div>
              </div>
              <div className="stock">
                <div>재고 없음</div>
                <div>{data.filter((item) => item.quantity === 0).length}</div>
              </div>
              <div className="stock">
                <div>평점 1점</div>
                <div>2</div>
              </div>
            </div>
          </div>
        </S.Info>
        <S.Table>
          <ItemTable columns={columns} data={data} />
        </S.Table>
      </S.Container>
    </div>
  );
};

export default itemManagement;
