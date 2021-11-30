import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --color-mint-cream: #f1f7ee;
    --color-laurel-green: #b0bea9;
    --color-asparagus: #92aa83;
    --color-nyanza: #e0edc5;
    --color-dark-moss-green: #3f612d;
    --font-heading: 'Roboto', Arial, Helvetica, sans-serif
    --font-body: 'Lato', Arial, Helvetica, sans-serif;
    --padding-page: 10px;
  }


  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1,
h2,
h3,
label,
button {
  background-color: #3f612d;
  color: white;
  font-family: var(--font-heading);
  font-size: 32px;
  text-align: center;
}
`;
