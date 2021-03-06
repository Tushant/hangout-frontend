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
    --primary: #303875;
    --primary1: #6493f3;
    --acceptGreen: #28A745;
    --rejectRed: #DC3545;
    --secondary: #b6ccfb;
    --grey: #686363;
    --white: #fff;
    --mildGrey: #555;
    --lightGrey: #9999994f;
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
    border: solid 1px var(--lightGrey);
  }

  input[type='password'],
  input[type='text'],
  input[type='submit'] {
    width: 100%;
  }
  input[type='text'],
  input[type='password'],
  input[type='submit'] {
    border-radius: 0.25rem;
    padding: 1rem;
    color: #3a3f44;
  }
  input[type='text'],
  input[type='password'] {
    background-color: #ffffff;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
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
  
  .full-grid {
    flex-basis: 100%;
    grid-column: 1 / -1;
  }

  .half-grid {
    flex-basis: calc(100% / var(--column-count));
    grid-column-end: span 1;
  }

`;
