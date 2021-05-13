import { createGlobalStyle } from "styled-components";

import Poppins from "../assets/fonts/Poppins-Regular.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins})
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        overflow-x:hidden;
        background-color:#2C0C19
    }
`;

export default GlobalStyle;
