import { DefaultTheme } from 'styled-components';
//palette에 blackColor와 같은 내용을 만들면 styled.d.ts파일에서도 타입을 명시해줘야함

const palette = {
  blackColor: '#000000',
  whiteColor: '#ffffff',
  brandColor: '#D86145',
  lightMidGrey: '#D6D6D6',
  midGrey: '#A9A9A9',
  whiteGrey: '#F5F5F5',
  darkGrey: '#505050',
  onulBrandBrighter: '#F17659',
};

export const theme: DefaultTheme = {
  palette,
};

export type Theme = typeof theme;
export default theme;
