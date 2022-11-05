import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';

const LeftNavBar = () => {
  return (
    <S.Container>
      <NavLink to="/">
        <span className="icon">아이콘 | </span>
        <span className="text">홈 로고</span>
      </NavLink>
      <NavLink to="/">
        <span className="icon">아이콘 | </span>
        <span className="text">대쉬보드</span>
      </NavLink>
      <NavLink to="/order-management">
        <span className="icon">아이콘 | </span>
        <span className="text">주문 관리</span>
      </NavLink>
      <NavLink to="/item-management">
        <span className="icon">아이콘 | </span>
        <span className="text">아이템 관리</span>
      </NavLink>
      <NavLink to="review-management">
        <span className="icon">아이콘 | </span>
        <span className="text">리뷰/문의 관리</span>
      </NavLink>
      <NavLink to="home-config">
        <span className="icon">아이콘 | </span>
        <span className="text">홈/큐레이션 설정</span>
      </NavLink>
    </S.Container>
  );
};

export default LeftNavBar;
