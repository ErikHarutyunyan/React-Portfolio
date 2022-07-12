import React, { useState, useEffect } from "react";
// Components
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";
import Grid from "../components/Grid";
import Thubn from "../components/Thumbn";
// Data
import data from "../data/data";
import Footer from "../components/Footer";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const Home = () => {
  const [projects, setProjects] = useState(data);
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);
  const [cat, setCat] = useState(allCategories);
  const [svgShow, setSvgShow] = useState(true);

  const filterItems = (category) => {
    if (category === "all") {
      setProjects(data);
      setCat(allCategories);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setCat([category]);
    setProjects(newItems);
  };
  useEffect(() => {
    let tabletSize = window.matchMedia("(max-width: 1025px)");
    if (!tabletSize.matches) {
      let path = document.getElementById("svgMap");
      let pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength + " " + pathLength;
      path.style.strokeDashoffset = pathLength;
      window.addEventListener("scroll", (e) => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        }
        var scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
        var drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
      });
    } else {
      setSvgShow(false);
    }
  }, []);

  return (
    <>
      <section>
        <Hero />
      </section>
      <section style={{ position: "relative" }}>
        {svgShow ? (
          <div className="line-container">
            <svg
              viewBox="0 0 1920 1080"
              fill="none"
              preserveAspectRatio="xMidYMax meet"
            >
              <g clipPath="url(#clip0_6_34)">
                <path
                  id="svgMap"
                  d="M100.881 -0.5C100.881 -0.5 100.881 251.3 100.881 263.6C100.881 275.9 106.581 286.8 119.281 297.6C131.981 308.4 134.281 310.1 136.781 308.1C139.281 306.1 140.181 304.7 142.981 301.9C145.781 299.1 151.881 298 155.681 300.1C159.381 302.2 159.281 306.7 159.281 306.7L166.281 312.4C166.281 312.4 157.581 314.5 154.881 316.9C152.181 319.2 151.881 320.8 151.881 320.8C151.881 320.8 157.081 325.1 176.981 323.5C196.981 321.9 209.081 314.4 209.081 314.4C209.081 314.4 191.381 365 135.481 349C133.181 356.8 140.781 359.3 140.281 365.4C139.781 371.5 134.981 379.7 103.781 370.2C72.5813 360.7 100.881 411 100.881 458.8C100.881 513.8 93.2813 538.4 81.2813 564.2C69.0813 590.5 34.2813 632.8 65.9813 669.7C207.081 834.4 1017.38 521.237 1638.5 421.5C1819.1 392.5 1819.2 529.6 1819.2 571.4V720.5C1819.2 726.9 1822.4 733 1827.4 737C1837.8 745.2 1841.5 750.7 1851.2 748.6C1866.4 745.4 1874.5 723.5 1874.5 723.5C1887.8 736.6 1883 778.1 1871.6 785.8C1871.6 785.8 1833.5 721.5 1784.2 721.5C1734.8 721.5 1723.8 754.4 1723.8 754.4C1723.8 754.4 1748.5 815.6 1819.1 787.5V1080"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_34">
                  <rect width="100%" height="100%" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : null}

        <Thubn>
          <Tabs categories={categories} filterItems={filterItems} />
          {cat.map((allCat, index) => {
            return (
              <Grid key={index} projects={projects} allCategories={allCat} />
            );
          })}
        </Thubn>
      </section>
      <Footer />
    </>
  );
};

export default Home;
