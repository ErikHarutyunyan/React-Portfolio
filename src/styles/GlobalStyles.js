import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/*
=============== 
Fonts
===============
*/

/*@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');*/

/*@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;900&display=swap");*/
/*@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,500&display=swap');*/

/*
=============== 
Variables
===============
*/
:root {
 --primary-100: #e0deff;
    --primary-200: #c1beff;
    --primary-300: #a29dff;
    --primary-400: #837dff;
    --primary-500: #645cff;
    --primary-600: #504acc;
    --primary-700: #3c3799;
    --primary-800: #282566;
    --primary-900: #141233;
    --grey-50: #f8fafc;
    --grey-100: #f1f5f9;
    --grey-200: #e2e8f0;
    --grey-300: #cbd5e1;
    --grey-400: #94a3b8;
    --grey-500: #64748b;
    --grey-600: #475569;
    --grey-700: #334155;
    --grey-800: #1e293b;
    --grey-900: #0f172a;
    --primary-design: #60dbfb;
    --black-design: #0d0d0d;
    --grey-design: #eff0f3;
    --black: #222;
    --white: #fff;
    --red-light: #f8d7da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;
    --yellow: #f0db51;
    --yellow-light: #f8e881;
    --yellow-dark: #6b5d00;
    --defaultFontSize: 112.5%;
    --headingFont: "Inconsolata",monospace;
    /*--headingFont: "Josefin",sans-serif; */
    --bodyFont: "Montserrat",sans-serif;
    --smallText: 0.7em;
    --backgroundColor: var(--white);
    --textColor: var(--grey-900);
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;
    --shadow-1: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
    --shadow-2: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    --shadow-3: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
    --shadow-4: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  background: var(--backgroundColor);
  color: var(--textColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
  overflow-x: hidden;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: var(--headingFont);
  font-weight: 400;
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
}
h1 {
    font-size: 3.052rem;
}
h2 {
    font-size: 2.441rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-primary-4);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.052rem;
  }
  h2 {
    font-size: 2.441rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*
=============== 
Reviews
===============
*/
/*
=============== 
Keyframes
===============
*/
@keyframes animateOpacityImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes inAnimation {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes outAnimation {
  20% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
`;
