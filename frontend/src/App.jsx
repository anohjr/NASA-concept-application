/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// --> Components
import NavBar from "./components/NavBar";
import LogoNasa from "./components/logoNASA";
import Gallery from "./pages/Gallery";
import IssTitle from "./components/IssTitle";
import ImgOtdButton from "./components/ImgOtdButton";
import ImageOfTheDay from "./pages/ImageOfTheDay";
import UpDownArrow from "./components/up-downArrow";
// --> PAGES
import SolarSystem from "./pages/SolarSystem";

import Home from "./pages/Home";
import Iss from "./pages/ISS";

import "./App.css";
import "./sm.css";

function App() {
  const [page, setPage] = useState("Home");
  const [popup, setPopup] = useState("default");
  const [displayGallery, setDisplayGallery] = useState(false);
  const [displayImgotd, setDisplayImgotd] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 431px)").matches
  );
  console.log("matches :", matches);

  return (
    <>
      <div id="app_overflow">
        <SwitchTransition>
          <CSSTransition key={page} timeout={350} classNames="page">
            {
              {
                ISS: (
                  <Iss
                    displayGallery={displayGallery}
                    displayImgotd={displayImgotd}
                  />
                ),
                SolarSystem: (
                  <SolarSystem
                    displayGallery={displayGallery}
                    displayImgotd={displayImgotd}
                  />
                ),
                Home: (
                  <Home
                    displayGallery={displayGallery}
                    displayImgotd={displayImgotd}
                  />
                ),
              }[page]
            }
          </CSSTransition>
        </SwitchTransition>
        <Gallery
          display={displayGallery}
          setDisplay={setDisplayGallery}
          setPopup={setPopup}
        />
        <ImageOfTheDay
          displayImgotd={displayImgotd}
          setDisplayImgotd={setDisplayImgotd}
          setPopup={setPopup}
        />
        <NavBar
          loadPage={setPage}
          currentPage={page}
          setDisplayGallery={setDisplayGallery}
          displayGallery={displayGallery}
          displayImgotd={displayImgotd}
          currentPopup={popup}
          matches={matches}
          setMatches={setMatches}
        />
      </div>
      <LogoNasa
        displayGallery={displayGallery}
        displayImgotd={displayImgotd}
        popup={popup}
        matches={matches}
      />
      <IssTitle
        display={page}
        displayGallery={displayGallery}
        displayImgotd={displayImgotd}
      />
      <ImgOtdButton
        displayImgotd={displayImgotd}
        setDisplay={setDisplayImgotd}
        displayGallery={displayGallery}
      />
      <UpDownArrow
        displayGallery={displayGallery}
        displayImgotd={displayImgotd}
      />
    </>
  );
}

export default App;
