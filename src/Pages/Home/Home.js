import React from "react";
import { Link, Outlet } from "react-router-dom";

// - Import des Assets :
import Responsive from "../../Assets/Responsive.svg";
import Logotech from "../../Assets/logotech.png";

// - Import du css :
import "./Home.css";

// - Import des compoments :

function Home() {
  return (
    <div className="Home">
      <section className="bloc1-home">
        <div className="bloc1-title">
          <div className="bloc1-title-h1">
            <h1 className="bloc1-title-h1-1">DEVELOPPEUR</h1>
            <h1 className="bloc1-title-h1-2" id="title-color">
              WEB & MOBILE
            </h1>
          </div>
          <div className="bloc1-title-p">
            <p className="bloc1-title-p-1">
              Je suis développeur de sites web modernes
            </p>
            <p className="bloc1-title-p-2"> spécialisé React Native et JS</p>
          </div>
          <div className="bloc1-btn-home">
            <button className="primaryBtn" id="home-btn">
              <Link href="Contact" className="primaryBtn-1" to="/Contact">
                contactez moi
              </Link>
            </button>
            <button className="primaryBtn" id="home-btn">
              <Link href="Cv" className="primaryBtn-2" to="/*">
                télécharger le cv
              </Link>
            </button>
          </div>
        </div>
        <img
          alt="backgroundResponsive"
          className="responsive-img"
          src={Responsive}
        />
      </section>
      <section className="bloc2-home">
        <div className="bloc2-title">
          <div className="bloc2-title-h1">
            <h1 className="bloc2-title-h1-1" id="title-color">
              TECHNOLOGY
            </h1>
            <h1 className="bloc2-title-h1-2">I'VE LEARN</h1>
          </div>
          <div className="bloc2-title-p">
            <p className="bloc2-title-p-1">
              During my learning course i've learn{" "}
            </p>
            <p className="bloc2-title-p-2">
              several languages, there the most requested !
            </p>
          </div>
        </div>
        <img alt="logoImage" className="logo-img" src={Logotech} />
      </section>
    </div>
  );
}

export default Home;
