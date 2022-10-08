import React, { useRef, useState } from 'react';
import * as S from './style';

const ImageUploader = ({ setImages, imageOrder = 0, setPreviewImage }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [currentImage, setCurrentImage] = useState();
  const [uploader, setUploader] = useState(true);
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
      base64Img = e.target!.result;
      setImages &&
        setImages((prev) => ({ ...prev, [`image${imageOrder}`]: base64Img.split(',')[1] }));
      setCurrentImage(base64Img);
      setPreviewImage(base64Img);
      setUploader(false);
    });
  };

  return (
    <S.Container>
      {currentImage && !uploader && (
        <>
          <img src={currentImage} alt="이미지가 없습니다" />
          <button
            onClick={() => {
              setUploader(true);
              setPreviewImage('');
            }}
          >
            이미지 취소
          </button>
        </>
      )}

      {uploader && (
        <S.Button onClick={onClickHandler}>
          <div>이미지 첨부{imageOrder}</div>
          <input type="file" accept="image/*" ref={inputRef} onChange={onUploadHandler} />
        </S.Button>
      )}
    </S.Container>
  );
};
export default ImageUploader;
