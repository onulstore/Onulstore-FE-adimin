import MagazineForm from 'components/MagazineForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const MagazineEdit = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <div className="top">
        <div className="top-title">매거진 수정</div>
        <div className="top-buttons">
          <button onClick={() => navigate(-1)}>등록 취소</button>
          <button>비공개 상태로 등록</button>
          <button>공개 상태로 등록</button>
        </div>
      </div>
      <MagazineForm isEdit={true} />
    </S.Container>
  );
};

export default MagazineEdit;
