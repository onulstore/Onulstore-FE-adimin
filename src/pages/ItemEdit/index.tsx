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
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [cookies] = useCookies();
  const categories = useRef([]);

  const [itemInfo, setItemInfo] = useState({
    brandId: 0,
    categoryId: 0,
    pCategoryId: 0,
    price: 0,
    productName: '',
    productStatus: 'SALE',
    quantity: 0,
    productImage: [],
    discountStatus: 'FALSE',
  });

  // const dispatch = useAppDispatch();
  const [images, setImages] = useState({});
  const [multi, setMulti] = useState(new FormData());

  const itemInfos = useAppSelector((state) => state.item);

  const deleteItem = async () => {
    const res = await axios({
      url: `https://onulstore.breon.ml/products/${itemId}`,
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });

    console.log('아이템 삭제 응답값', res);

    alert('아이템이 삭제되었습니다');
    navigate(-1);
  };

  console.log('유즈스테이트itemInfo', itemInfo);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'brandId':
      // case 'categoryId': // 하위 컴포넌트에서 따로 사용중..
      case 'price':
      case 'quantity':
        setItemInfo((prev) => {
          return { ...prev, [name]: parseInt(value) };
        });
        return;
      default:
        setItemInfo((prev) => {
          return { ...prev, [name]: value };
        });
    }
  };

  const getItem = async () => {
    const itemResponse = await axios({
      url: `https://onulstore.breon.ml/products/${itemId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        'content-type': 'application/json',
      },
    });

    console.log('아이템 GET 결과: ', itemResponse.data);

    const {
      brand,
      category,
      content,
      id,
      originalPrice,
      productImage,
      productName,
      productStatus,
      quantity,
    } = itemResponse.data;

    setItemInfo((prev) => ({
      ...prev,
      brandId: brand.id,
      category: category.id,
      pCategoryId: category.parent.id,
      content,
      id,
      price: originalPrice,
      productImage,
      productName,
      productStatus,
      quantity,
    }));

    // brandId: 0,
    // categoryId: 0,
    // content: '',
    // price: 0,
    // productName: '',
    // productStatus: 'SALE',
    // quantity: 0,

    // dispatch(setItemInfo(itemInfo));
  };

  useEffect(() => {
    getItem();
  }, []);

  /// DO EDIT
  const doEdit = async () => {
    const info = { ...itemInfo };
    delete info.productImage;
    delete info.pCategoryId;
    delete info.content;
    delete info.id;
    delete info.category;
    console.log('인포', info);

    const editRes = await axios({
      url: `https://onulstore.breon.ml/products/${itemId}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        'content-type': 'application/json',
      },
      data: info,
    });

    alert('상품이 수정되었습니다');
    navigate(-1);
    const res = await axios({
      url: `https://onulstore.breon.ml/products/${itemId}/image`,
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
      data: multi,
    });
    console.log('이미지 등록 성공', res);
  };

  console.log('주소값!!', itemInfo.productImage[0]?.imageName);
  return (
    <div>
      <FakeEditHeader />
      <S.Container>
        <div className="page-label">
          <div className="page-title">아이템 상세정보 수정</div>
          <div className="button-container">
            <Button onClick={() => navigate(-1)}>수정 취소</Button>
            <Button onClick={deleteItem}>아이템 삭제</Button>
            <Button onClick={doEdit}>판매중단 상태로 저장</Button>
            <Button color="#F17659" onClick={doEdit}>
              판매하기 상태로 저장
            </Button>
          </div>
        </div>
        <div className="product">
          <div className="product-left">
            <div className="product-left-title">아이템 이미지</div>

            <div className="product-left-big">
              <ImageUploader
                setMulti={setMulti}
                imageName={itemInfo.productImage[0]?.imageName}
                imageOrder={0}
                isBig={true}
                formData={multi}
              />
            </div>

            <div className="grid-container">
              <ImageUploader
                setMulti={setMulti}
                imageName={itemInfo.productImage[1]?.imageName}
                imageOrder={1}
                formData={multi}
              />
              <ImageUploader
                setMulti={setMulti}
                imageName={itemInfo.productImage[2]?.imageName}
                imageOrder={2}
                formData={multi}
              />
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
                      value={itemInfo.price!}
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
