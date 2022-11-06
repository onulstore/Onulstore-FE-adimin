import * as S from './style';
import api from 'utils/Api';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { FakeManagementHeader, FolderIcon, PeopleIcon, PlusIcon } from 'components/icons';
import OrderTable from 'components/OrderTable';

const OrderManagement = () => {
  const [data, setData] = useState([]);
  console.log('주문내역', data);
  const columns = useMemo(
    () => [
      {
        Header: '주문 번호', // 테이블 헤더에 보여줄 텍스트 명시
        accessor: 'orderId', // accessor 속성에는 해당 열이 data 객체의 어느 속성을 읽어야 하는지 명시했습니다
      },
      {
        Header: '주문날짜-시간',
        accessor: 'orderDate',
      },
      {
        Header: '배송방법',
        accessor: 'deliveryMeasure',
      },
      {
        Header: '주문상태',
        accessor: 'orderStatus',
      },
    ],
    [],
  );

  const getOrders = async () => {
    const { data } = await api.get('/orders/entire');
    // const res = await axios({
    //   url: `https://onulstore.breon.ml/products/list?pageNumber=0&pageSize=100`,
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //     Authorization: `Bearer ${cookies.accessToken}`,
    //   },
    // });

    const orderData = data.content;
    setData(orderData);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <FakeManagementHeader />
      <S.Container>
        <S.Top>
          <div className="top-title">주문 현황 요약</div>
        </S.Top>
        <S.Info>
          <div className="info-left">
            <div className="icon">
              <FolderIcon />
            </div>
            <div className="bottom">
              {/* <div className="regi-item">
                <div>등록된 아이템</div>
                <div>{data.length}</div>
              </div>
              <div className="sale-item">
                <div>판매중인 아이템</div>
                <div>
                  <span>
                    {data.filter((item) => (item as any).productStatus === 'SALE').length}
                  </span>
                  <span>
                    {(data.filter((item) => (item as any).productStatus === 'SALE').length /
                      data.length) *
                      100}
                    %
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="info-right">
            <div className="icon">
              <PeopleIcon />
            </div>
            <div className="bottom">
              {/* <div className="stock">
                <div>재고 없음 근접</div>
                <div>{data.filter((item: any) => item.quantity <= 100).length}</div>
              </div>
              <div className="stock">
                <div>재고 없음</div>
                <div>{data.filter((item: any) => item.quantity === 0).length}</div>
              </div>
              <div className="stock">
                <div>평점 1점</div>
                <div>2</div>
              </div> */}
            </div>
          </div>
        </S.Info>
        <S.Table>
          <OrderTable columns={columns} data={data} />
        </S.Table>
      </S.Container>
    </div>
  );
};

export default OrderManagement;
