import styled, {css} from "styled-components";

type styleType = {
  color?: string
  // middleHeight?: boolean
  font?: boolean
  width?: number
  height?: number
}
export const LargeBtn = styled.button<styleType>`
  width: ${({width = 31.1}) => width}rem;
  height: ${({height = 6}) => height}rem;
  margin: 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.color === '#F5F5F5' ? '#505050' : '#fff'};
  outline: none;
  padding: 1.7rem 1.2rem;
  background: ${(props) => props.color || '#2F2F33'};
  line-height: 150%;
`
export const TextContainer = styled.div<styleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-size: 1.8rem;
  font-weight: 600;
  // 작은 폰트 조정
  ${(props) =>  props.font  && css`
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 700;
    `}
  & svg {
    margin: 0 .8rem;
  }
`