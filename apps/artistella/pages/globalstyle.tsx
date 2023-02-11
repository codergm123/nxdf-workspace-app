import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
${reset}
 *{
   box-sizing: border-box;
   margin:0;
   padding:0;
 }
 body{
  background-color: #141722;
  font-family: 'Roboto';
  color: white ;
 }
 @font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.ttf');
}

a{
  :visited{
    color:white;
    text-decoration: none;
  }
  :link{
    color:white;
    text-decoration: none;
  }
  :hover{
    color:white;
    text-decoration: none;
  }
}

input{
  :focus{
    outline: none;
  }
}

`;