import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
 
${reset}

* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  /* rem 값의 기준을 잡기 위함 16px -> 10px */
}
body {
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
