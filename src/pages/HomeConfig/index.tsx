import { blue } from '@mui/material/colors';
import HomeBanner from 'components/BannerConfig';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as S from './style';
const HomeConfig = () => {
  return (
    <S.Container>
      <S.NavBar>
        <S.HomeNav>
          <div>홈 화면 설정</div>
          <div>
            <NavLink to="banner" className={({ isActive }) => (isActive ? 'active-nav' : '')}>
              홈 배너 설정
            </NavLink>
            <NavLink to="curation" className={({ isActive }) => (isActive ? 'active-nav' : '')}>
              홈 큐레이션 설정
            </NavLink>
            <NavLink to="review" className={({ isActive }) => (isActive ? 'active-nav' : '')}>
              홈 리뷰 설정
            </NavLink>
          </div>
        </S.HomeNav>
        <S.CurationNav>
          <div>큐레이션 설정</div>
          <NavLink to="today" className={({ isActive }) => (isActive ? 'active-nav' : '')}>
            오늘만 아이템 설정
          </NavLink>
          <NavLink to="magazine" className={({ isActive }) => (isActive ? 'active-nav' : '')}>
            매거진 설정
          </NavLink>
          <NavLink to="md" className={({ isActive }) => (isActive ? 'active-nav' : '')}>
            MD 추천 설정
          </NavLink>
        </S.CurationNav>
      </S.NavBar>
      <S.Outlet>
        <Outlet />
      </S.Outlet>
    </S.Container>
  );
};

export default HomeConfig;
