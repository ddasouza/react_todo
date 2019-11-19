import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body, html {
	margin: 0;
	padding: 0;
}

body {
	font-size: 16px;
}

* {
	box-sizing: border-box;
}
`;
