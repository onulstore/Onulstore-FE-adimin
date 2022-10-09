import MagazineModal from 'components/MagazineModal';
import ImageUploader from 'components/ui/ImageUploader';
import Input from 'components/ui/Input';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeMagazine, resetMagazine, setMagazineInfo } from 'store/slices/magazineSlice';
import * as S from './style';
import axios from 'axios';
const MagazineForm = ({ isEdit }) => {
  const [modal, setModal] = useState(false);

  const { magazineId } = useParams();
  const [previewImage, setPreviewImage] = useState([]);
  const { curationImg, magazineData, product1, product2, magazine } = useAppSelector(
    (state) => state.magazine,
  );

  console.log('매거진', magazine);
  const dispatch = useAppDispatch();
  const getMagazine = async () => {
    const res = await axios({
      url: `http://onulstore.dlcpop.com/curations/${magazineId}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    console.log('getMagazine 응답: ', res);
    const product1 = res.data[0].product;
    const product2 = res.data[1].product;
    const magazine = res.data[0].curation;

    dispatch(setMagazineInfo({ product1, product2, magazine }));
  };
  useEffect(() => {
    isEdit && getMagazine();
    !isEdit && dispatch(resetMagazine());
  }, []);
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

        <Input
          label="제목(공백포함 20자 이내)"
          name="title"
          value={magazine.title}
          onChange={onChangeHandler}
        />
        <div>본문(공백 포함 100자 이내)</div>
        <textarea name="content" value={magazine.content} onChange={onChangeHandler} />
        <div>아이템1</div>
        <button onClick={modalHandler}>아이템 선택하기</button>
        <div>아이템2</div>
        <button onClick={modalHandler}>아이템 선택하기</button>
      </div>
      <div className="right">
        <div>매거진 디스플레이 미리보기</div>
        <img className="preview-image" src={previewImage} alt="이미지가 없습니다" />
        <div className="preview-title">
          {magazine?.title.length === 0 && `매거진 제목이 표시되는 곳`}
          {magazine && <div>{magazine.title}</div>}
        </div>

        <div className="preview-content">
          {magazine?.content.length === 0 && (
            <div>
              매거진 본문은 여기에 표시되요. 줄바꿈도 할 수 있어요. 직접 마주 볼 때처럼 쉽고 짧은
              글을 써볼까요? 비슷한 어조를 계속 쓰면 브랜드 정체성이 더 선명해져요. 오늘상점에 온
              사람들은 이 느낌을 기억하고 또 올 거예요!
            </div>
          )}
          {magazine && <div>{magazine.content}</div>}
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
