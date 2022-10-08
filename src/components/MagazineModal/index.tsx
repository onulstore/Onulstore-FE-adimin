import * as S from './style';
import { useAppDispatch } from 'store/hooks';
import { CloseIcon, SearchIcon } from 'components/icons';
const MagazineModal = ({ setModal }) => {
  const dispatch = useAppDispatch();

  const onCompleteHandler = () => {};
  const onCloseHandler = () => {
    setModal(false);
  };

  return (
    <S.Background>
      <S.Modal>
        <S.Top>
          <S.Label>
            <label>아이템 선택</label>
          </S.Label>
          <S.CloseBtn onClick={onCloseHandler}>
            <CloseIcon />
          </S.CloseBtn>
        </S.Top>
        <div> 시스템에 등록된 모든 아이템이 검색됩니다.</div>
        <S.SearchInput>
          <SearchIcon />
          <input placeholder="아이템 검색어 입력" />
        </S.SearchInput>
        <S.ItemList>
          {/* {items?.map((item) => (
            <div></div>
          ))} */}
        </S.ItemList>
        <S.Bottom>
          <S.CancelBtn onClick={onCloseHandler}>취소</S.CancelBtn>
          <S.EnterBtn onClick={onCompleteHandler}>확인</S.EnterBtn>
        </S.Bottom>
      </S.Modal>
    </S.Background>
  );
};

export default MagazineModal;
