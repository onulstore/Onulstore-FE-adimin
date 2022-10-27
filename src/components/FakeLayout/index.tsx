import FakeLeftNav from 'components/FakeLeftNav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
const FakeLayout = () => {
  return (
    <S.Container>
      <div className="fake">
        <FakeLeftNav />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </S.Container>
  );
};

export default FakeLayout;
