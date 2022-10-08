import MagazineModal from 'components/MagazineModal';
import ImageUploader from 'components/ui/ImageUploader';
import Input from 'components/ui/Input';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeMagazine } from 'store/slices/magazineSlice';
import * as S from './style';
const MagazineForm = () => {
  const [modal, setModal] = useState(false);
  const [previewImage, setPreviewImage] = useState([]);
  const { title, content, curationImg } = useAppSelector((state) => state.magazine);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(changeMagazine({ name, value }));
  };

  const modalHandler = () => {
    setModal(true);
  };
  return (
    <S.Container>
      <div className="left">
        <div>매거진 이미지</div>
        <ImageUploader setPreviewImage={setPreviewImage} />
        <div>매거진 내용</div>
        <Input label="제목(공백포함 20자 이내)" name="title" onChange={onChangeHandler} />
        <div>본문(공백 포함 100자 이내)</div>
        <textarea name="content" onChange={onChangeHandler} />
        <div>아이템1</div>
        <button onClick={modalHandler}>아이템 선택하기</button>
        <div>아이템2</div>
        <button onClick={modalHandler}>아이템 선택하기</button>
      </div>
      <div className="right">
        <div>매거진 디스플레이 미리보기</div>
        <img className="preview-image" src={previewImage} alt="이미지가 없습니다" />
        <div className="preview-title">
          {title.length === 0 && `매거진 제목이 표시되는 곳`}
          {title && <div>{title}</div>}
        </div>
        <div className="preview-content">
          {content.length === 0 &&
            `매거진 본문은 여기에 표시되요. 줄바꿈도 할 수 있어요. 직접 마주 볼 때처럼 쉽고 짧은 글을
          써볼까요? 비슷한 어조를 계속 쓰면 브랜드 정체성이 더 선명해져요. 오늘상점에 온 사람들은 이
          느낌을 기억하고 또 올 거예요!`}
        </div>
        <div className="preview-item">
          <div>아이템칸1</div>
          <div>아이템칸2</div>
        </div>
      </div>

      {modal && <MagazineModal setModal={setModal} />}
    </S.Container>
  );
};

export default MagazineForm;
