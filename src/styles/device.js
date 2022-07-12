// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 428px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px


const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "428px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `only screen and (max-width: ${size.mobileS})`,
  mobileM: `only screen and (max-width: ${size.mobileM})`,
  mobileL: `only screen and (max-width: ${size.mobileL})`,
  tablet: `only screen and (max-width: ${size.tablet})`,
  laptop: `only screen and (max-width: ${size.laptop})`,
  laptopM: `only screen and (max-width: ${size.laptopM})`,
  laptopL: `only screen and (min-width: ${size.laptopL})`,
  desktop: `only screen and(min-width: ${size.desktop})`,
};
