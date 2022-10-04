import { useEffect, useState, useRef } from 'react';
import ChainedSelect from 'components/ui/ChainedSelect';
import Input from 'components/ui/Input';
import * as S from './style';
import Select from 'components/ui/Select';
import ImageUploader from 'components/ui/ImageUploader';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NjQ4NzI1MzJ9.UN1eipqk8dginXKqlxLNMf4IPyqph10F5NAWKc_AWDlvXBACNKmfIHUfi3eKvQTrLBuuQIDHvbQZmIHjczvU6Q';
const brands = [
  {
    brandName: 'nike',
    id: 0,
  },
  {
    brandName: 'adidas',
    id: 1,
  },
  {
    brandName: 'jordan',
    id: 2,
  },
];
const ProductRegister = () => {
  const categories = useRef([]);
  const [productInfo, setProductInfo] = useState({
    brandId: 0,
    categoryId: 0,
    content: '',
    price: 0,
    productName: '',
    productStatus: 'SALE',
    quantity: 0,
  });

  const [images, setImages] = useState({});

  const imageArray = Object.values(images);
  console.log('productInfo', productInfo);
  console.log(imageArray);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'brandId':
      case 'categoryId': // 하위 컴포넌트에서 따로 사용중..
      case 'price':
      case 'quantity':
        setProductInfo((prev) => {
          return { ...prev, [name]: parseInt(value) };
        });
        return;
      default:
        setProductInfo((prev) => {
          return { ...prev, [name]: value };
        });
    }
  };

  const doRegister = async () => {
    const itemResponse = await axios({
      url: 'http://onulstore.dlcpop.com/products',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // 'content-type': 'application/json',
      },
      data: productInfo,
    });

    console.log('아이템', itemResponse);

    // const imageResponse = await axios({
    //   url: `http://onulstore.dlcpop.com/products/${itemResponse.id}/image`,
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    //   data: imageArray,
    // });
    // console.log('이미지', imageResponse);
  };
  return (
    <S.Container>
      <div className="page-label">
        <div>새 아이템 등록</div>
        <button>판매중단 상태로 보관(수정에서 쓰일 것 같은 버튼)</button>
        <button onClick={doRegister}>
          판매하기 상태로 저장(이게 아이템 생성 버튼으로 보입니다)
        </button>
      </div>
      <div className="product">
        <div className="product-left">
          <div>이미지 올리는 곳</div>
          <ImageUploader setImages={setImages} imageOrder={1} />
          <ImageUploader setImages={setImages} imageOrder={2} />
          <ImageUploader setImages={setImages} imageOrder={3} />
          <ImageUploader setImages={setImages} imageOrder={4} />
        </div>
        <div className="product-right">
          <div className="product-right-info">
            <Input label="아이템 이름" name="productName" onChange={onChangeHandler} />
            <ChainedSelect
              categories={categories.current}
              setProductInfo={setProductInfo}
              onChange={onChangeHandler}
            />
            <Input label="판매가격 (정가)" name="price" onChange={onChangeHandler} />
            {/* <Select label="할인방법" name=''/> */}

            {/* 브랜드는 500에러가 떠서 임시로 더미데이터로 만들었습니다 */}
            <Select label="브랜드" name="brandId" options={brands} onChange={onChangeHandler} />
            <Input label="재고량" name="quantity" type="number" onChange={onChangeHandler} />
          </div>
          <div className="product-right-detail">
            {/* 나중에는 텍스트가 아닌 이미지 파일로 대체하겠지만 생성을 위해 임시로 만들어두었습니다 */}
            <Input label="아이템 상세정보" name="content" onChange={onChangeHandler} />
            <ImageUploader setImages={setImages} imageOrder={0} />
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default ProductRegister;
