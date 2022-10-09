import React from 'react'
import * as S from "./style";
type ButtonType = {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  color?: string
  font?: boolean
  width?: number
  height?: number
}
function LargeBtn(props: ButtonType) {
  return (
    <S.LargeBtn {...props}>
      <S.TextContainer {...props}>{props.children}</S.TextContainer>
    </S.LargeBtn>
  )
}

export default LargeBtn