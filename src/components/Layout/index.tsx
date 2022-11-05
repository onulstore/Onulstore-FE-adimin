import LeftNavBar from 'components/LeftNavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
const Layout = () => {
  return (
    <S.Container>
      <div className="left-nav">
        <LeftNavBar />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </S.Container>
  );
};

export default Layout;
