import React, { useRef, useState } from 'react';
import * as S from './style';

const ImageUploader = ({ setImages, imageOrder }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [currentImage, setCurrentImage] = useState();
  const onClickHandler = () => {
    inputRef.current!.click();
  };

  const onUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFiles = (e.target as HTMLInputElement).files;

    let base64Img;
    const imageFile = imageFiles![0];
    const imageReader = new FileReader();
    imageReader.readAsDataURL(imageFile);
    imageReader.addEventListener('load', async (e) => {
      base64Img = await e.target!.result;
      setImages((prev) => ({ ...prev, [`image${imageOrder}`]: base64Img.split(',')[1] }));
      setCurrentImage(base64Img);
    });
  };

  return (
    <S.Container>
      {currentImage && <img src={currentImage} alt="이미지가 없습니다" />}
      <S.Button onClick={onClickHandler}>
        <div>이미지 첨부{imageOrder}</div>

        <input type="file" accept="image/*" ref={inputRef} onChange={onUploadHandler} />
      </S.Button>
    </S.Container>
  );
};
export default ImageUploader;
