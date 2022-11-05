import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';

const LeftNavBar = () => {
  return (
    <S.Container>
      <S.Paths>
        <NavLink to="/dashboard" className="logo">
          <span className="icon">아이콘 | </span>
          <span className="text">홈 로고</span>
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-nav' : 'nav')}>
          <span className="icon">아이콘 | </span>
          <span className="text">대쉬보드</span>
        </NavLink>
        <NavLink
          to="/order-management"
          className={({ isActive }) => (isActive ? 'active-nav' : 'nav')}
        >
          <span className="icon">아이콘 | </span>
          <span className="text">주문 관리</span>
        </NavLink>
        <NavLink
          to="/item-management"
          className={({ isActive }) => (isActive ? 'active-nav' : 'nav')}
        >
          <span className="icon">아이콘 | </span>
          <span className="text">아이템 관리</span>
        </NavLink>
        <NavLink
          to="review-management"
          className={({ isActive }) => (isActive ? 'active-nav' : 'nav')}
        >
          <span className="icon">아이콘 | </span>
          <span className="text">리뷰/문의 관리</span>
        </NavLink>
        <NavLink to="home-config" className={({ isActive }) => (isActive ? 'active-nav' : 'nav')}>
          <span className="icon">아이콘 | </span>
          <span className="text">홈/큐레이션 설정</span>
        </NavLink>
      </S.Paths>

      <S.LogOutBtn>아이콘 | Logout</S.LogOutBtn>
    </S.Container>
  );
};

export default LeftNavBar;
