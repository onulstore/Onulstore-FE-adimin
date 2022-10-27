import { useEffect, useState, useRef } from 'react';
import ChainedSelect from 'components/ui/ChainedSelect';
import Input from 'components/ui/Input';
import * as S from './style';
import BrandSelect from 'components/ui/BrandSelect';
import ImageUploader from 'components/ui/ImageUploader';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setItemInfo } from 'store/slices/itemSlice';
import { FakeEditHeader } from 'components/icons';
import Button from 'components/ui/Button';
import DiscountSelect from 'components/ui/DiscountSelect';

const ItemEdit = () => {
  // HOOKS
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [cookies] = useCookies();
  const categories = useRef([]);
  const [itemInfo, setItemInfo] = useState<any>({
    brandId: 0,
    categoryId: 0,
    pCategoryId: 0,
    price: null, // 여기서 오류 발생함 number떄문에 그런듯
    productName: '',
    productStatus: 'SALE',
    quantity: 0,
    productImage: [],
    discountStatus: 'FALSE',
  });
  const [images, setImages] = useState({});
  const [multi, setMulti] = useState(new FormData());

  // REQUESTS

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;

    switch (name) {
      case 'brandId':
      // case 'categoryId': // 하위 컴포넌트에서 따로 사용중..
      case 'price':
      case 'quantity':
        setItemInfo((prev: any) => {
          return { ...prev, [name]: parseInt(value) };
        });
        return;
      default:
        setItemInfo((prev: any) => {
          return { ...prev, [name]: value };
        });
    }
  };

  const doRegister = async () => {
    const info: any = { ...itemInfo };
    delete info.productImage;
    delete info.pCategoryId;
    delete info.content;
    delete info.id;
    delete info.category;
    console.log('인포', info);

    const editRes = await axios({
      url: `https://onulstore.breon.ml/products`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        'content-type': 'application/json',
      },
      data: info,
    });

    console.log('상품등록 성공', editRes.data.id);

    const targetId = editRes.data.id;

    const res = await axios({
      url: `https://onulstore.breon.ml/products/${targetId}/image`,
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
      data: multi,
    });
    console.log('이미지 등록 성공', res);

    alert('상품 등록에 성공했습니다');

    navigate('/item-management');
  };

  return (
    <div>
      <FakeEditHeader />
      <S.Container>
        <div className="page-label">
          <div className="page-title">아이템 상세정보 수정</div>
          <div className="button-container">
            <Button onClick={() => navigate('/item-management')}>등록 취소</Button>
            <Button onClick={doRegister}>판매중단 상태로 등록</Button>
            <Button color="#F17659" onClick={doRegister}>
              판매하기 상태로 등록
            </Button>
          </div>
        </div>
        <div className="product">
          <div className="product-left">
            <div className="product-left-title">아이템 이미지</div>

            <div className="product-left-big">
              <ImageUploader setMulti={setMulti} imageOrder={0} isBig={true} formData={multi} />
            </div>

            <div className="grid-container">
              <ImageUploader setMulti={setMulti} imageOrder={1} formData={multi} />
              <ImageUploader setMulti={setMulti} imageOrder={2} formData={multi} />
              <ImageUploader setMulti={setMulti} imageOrder={3} formData={multi} />
              <ImageUploader setMulti={setMulti} imageOrder={4} />
            </div>
          </div>
          <div className="product-right">
            <div className="product-right-info">
              <div className="form-top">
                <Input
                  label="아이템 이름"
                  name="productName"
                  onChange={onChangeHandler}
                  value={itemInfo.productName}
                  placeholder="아이템 이름 입력"
                />
              </div>
              <div className="form-mid">
                <ChainedSelect
                  pCategoryId={itemInfo.pCategoryId}
                  categoryId={itemInfo.category}
                  categories={categories.current}
                  setItemInfo={setItemInfo}
                  onChange={onChangeHandler}
                />

                <div className="form-mid-price">
                  <div className="form-mid-price-input">
                    <Input
                      label="판매가격 (정가)"
                      name="price"
                      onChange={onChangeHandler}
                      value={itemInfo.price}
                      placeholder="숫자 입력 (¥)"
                    />
                  </div>
                  <DiscountSelect label="할인방법" name="discountStatus" />
                </div>
              </div>

              <div className="form-bottom">
                <div className="form-bottom-brand">
                  <BrandSelect
                    label="브랜드"
                    name="brandId"
                    optionKey="brandName"
                    onChange={onChangeHandler}
                    brandId={itemInfo.brandId}
                  />
                </div>
                <div className="form-bottom-stock">
                  <Input
                    label="재고량"
                    name="quantity"
                    value={itemInfo.quantity}
                    type="number"
                    onChange={onChangeHandler}
                    placeholder="숫자 입력 (재고 없는 경우 0 입력)"
                  />
                </div>
              </div>
            </div>
            <div className="product-right-detail">
              <div className="label">아이템 상세정보</div>
              <textarea placeholder="내용을 입력하세요" />
            </div>
          </div>
        </div>
      </S.Container>
    </div>
  );
};

export default ItemEdit;
