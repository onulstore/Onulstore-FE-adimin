import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
/**fonts */
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import MontserratRegular from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
import PretendardBlack from 'assets/fonts/Pretendard-Black.otf';
import PretendardBold from 'assets/fonts/Pretendard-Bold.otf';
import PretendardRegular from 'assets/fonts/Pretendard-Regular.otf';

export default createGlobalStyle`
  @font-face {
    font-family: "MontserratBold";
    src: url(${MontserratBold}) format('truetype');
  }
  @font-face {
    font-family: "MontserratRegular";
    src: url(${MontserratRegular}) format('truetype');
  }
  @font-face {
    font-family: "MontserratSemiBold";
    src: url(${MontserratSemiBold}) format('truetype');
  }
  @font-face {
    font-family: "PretendardBlack";
    src: url(${PretendardBlack}) format('opentype');
  }
  @font-face {
    font-family: "PretendardBold";
    src: url(${PretendardBold}) format('opentype');
  }
  @font-face {
    font-family: "PretendardRegular";
    src: url(${PretendardRegular}) format('opentype');
  }
  
${reset}

* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  /* rem 값의 기준을 잡기 위함 16px -> 10px */
}
body {
  font-family: 'MontserratSemiBold' ,serif !important;
  /* max-width: 375px; */
  margin: 0;
}
input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}
input:focus {
  outline: none;
}
button {
  cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
}
`;
