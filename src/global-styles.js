import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */

injectGlobal`
  * { box-sizing: border-box; }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    background: hsl(0 0% 96%);
    font-family: 'Montserrat', 'Lato', sans-serif;
  }

  :root {
    --notificationBlue: #CCE5F5;
    --notificationBorder: #B8DAFF;
    --notificationColor: #004085;
    --primary: #6493f3;
    --acceptGreen: #28A745;
    --rejectRed: #DC3545;
    --secondary: #b6ccfb;
    --grey: #686363;
    --white: #fff;
    --mildGrey: #444;
    --lightGrey: #777;
    --lighterGrey: #ccc;
    --lightestGrey: #efefef;
    --success: #d4edda;
    --successText: #155724;
    --successBorder: #c3e6cb;
    --error: #f8d7da;
    --errorText: #721c24;
    --errorBorder: #f5c6cb;
    --notification: #009688;
    --shadowGrey: #E1E1E1;
    --bgDarkGrey: #F5F5F5;
    --bgLightGrey: #FBFBFB;
    --textGrey: #C3C3C3;
    --textBlack: #000000;
    --textBlue: #5BB9DD;
    --textOrange: #FFA834;
    --orangeRibbon: #FFF3CD;
    --orangeRibbonBorder: #FFEEBA;
    --orangeRibbonText: #856404;
    --textGreyAlt: #4E596A;
    --buttonWrapperFooter: #f7f7f7;
  }

  #app {
    background-color: #fafafa;
  }

  .active > span {
      color: #0094d9;
  }

  .active > g > path {
    fill: #0094d9;
  }

  input {
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    border: solid 1px #666;
  }


  input[type="submit"], button {
    background: var(--primary);
    border: none;
    color: var(--white) !important
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
  }
`;
