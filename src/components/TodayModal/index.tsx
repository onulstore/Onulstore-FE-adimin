import { CloseIcon } from 'components/icons';
import * as S from './style';

const TodayModal = ({ setModal }) => {
  const onCompleteHandler = () => {};
  const onCloseHandler = () => {
    setModal(false);
  };

  return (
    <S.Background>
      <S.Modal>
        <S.Top>
          <S.Label>
            <label>오늘만 할인 아이템 상세설정</label>
          </S.Label>
          <S.CloseBtn onClick={onCloseHandler}>
            <CloseIcon />
          </S.CloseBtn>
        </S.Top>

        <div> 설정 대상 아이템 및 정상 판매가격</div>
        <div> 아이템 정보 들어갈 자리</div>

        <S.SearchInput>
          <div>¥</div>
          <input placeholder="숫자 입력" />
        </S.SearchInput>

        <S.DateInput>
          <input />
          <div>달력아이콘</div>
        </S.DateInput>

        <S.Bottom>
          <S.CancelBtn onClick={onCloseHandler}>취소</S.CancelBtn>
          <S.EnterBtn onClick={onCompleteHandler}>확인</S.EnterBtn>
        </S.Bottom>
      </S.Modal>
    </S.Background>
  );
};

export default TodayModal;
