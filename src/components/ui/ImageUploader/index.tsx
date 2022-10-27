import axios from 'axios';
import React, { useRef, useState } from 'react';
import * as S from './style';
import { useCookies } from 'react-cookie';
import { BigImageIcon, DeleteIcon, ImageUploadIcon } from 'components/icons';
const ImageUploader = ({
  setMulti,
  imageOrder = 0,
  setPreviewImage,
  formData,
  isBig,
  imageName,
}) => {
  const [cookies] = useCookies();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [uploader, setUploader] = useState(Boolean(!imageName));

  // console.log('currentImage', currentImage);
  const onClickHandler = () => {
    inputRef.current!.click();
  };

  const onUploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFiles = (e.target as HTMLInputElement).files;
    console.log('imageFiles', imageFiles);
    // let base64Img;

    // const formData = new FormData();

    // for (let i = 0; i < 4; i++) {
    //   const imageFile = imageFiles![i];
    //   console.log(`이미지파일${i}`, imageFile);
    //   formData.append('images', imageFile);
    // }

    const imageFile = imageFiles![0];
    console.log(`이미지파일${imageOrder}`, imageFile);
    // formData.append('images', imageFile);
    formData.append('images', imageFile);

    // setMulti(formData);

    // const imageFile = imageFiles![0];
    // console.log(`이미지파일`, imageFile);
    // formData.append('images', imageFile);

    // console.log('formData', formData);

    // 일단 테스트
    // const res = await axios({
    //   url: `http://15.164.124.56/products/${4}/image`,
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //     Authorization: `Bearer ${cookies.accessToken}`,
    //   },
    //   data: formData,
    // });
    // console.log('이미지업로드 결과', res);

    ///////////// base64 관련 코드 ////////////
    const imageReader = new FileReader();
    imageReader.readAsDataURL(imageFile);
    imageReader.addEventListener('load', async (e) => {
      const base64Img = e.target!.result;

      setUploader(false);
      setCurrentImage(base64Img);
      //////////////////////////////////////////
      setUploader(false);
    });
  };

  console.log('imageName: ', imageName);
  console.log('uploader', uploader);
  return (
    <S.Container>
      {!uploader && (
        <div className="image">
          <S.Image
            isBig={isBig}
            src={
              currentImage
                ? currentImage
                : `https://onulstorebucket.s3.ap-northeast-2.amazonaws.com/${imageName}`
            }
            alt="이미지가 없습니다"
          />
          <button
            onClick={() => {
              setUploader(true);
              setCurrentImage('');
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      )}

      {uploader && (
        <S.Button onClick={onClickHandler}>
          <div>
            {isBig && <BigImageIcon />}
            {!isBig && <ImageUploadIcon />}
          </div>
          <input type="file" accept="image/*" ref={inputRef} onChange={onUploadHandler} multiple />
        </S.Button>
      )}
    </S.Container>
  );
};
export default ImageUploader;
