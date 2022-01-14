import React from "react";

import "./Projet.css";

// - import Images :
import Dashboard from "../../Assets/Dashboard.png";
import Messagerie from "../../Assets/Messagerie.png";

// - import Compoments :
import CardProjet from "../../Components/CardProjet/CardProjet.js";

function Projet() {
  return (
    <div className="Projet">
      <section className="bloc1-projet">
        <div className="bloc1-projet-titre">
          <h1 id="my-title">MY RECENT WORK</h1>
          <div className="bloc1-projet-titre-p">
            <p id="my-p">
              Here are a few design projects I've worked on recently.{" "}
            </p>
            <p id="my-p">Want to see more? Email me.</p>
          </div>
        </div>

        <div className="bloc1-projet-projet">
          <CardProjet />
        </div>
      </section>
      <section className="bloc2-projet">
        <div className="bloc2-projet-titre">
          <h1 id="my-title">MORE ?</h1>
          <div className="bloc2-projet-titre-p">
            <p id="my-p">
              Also, this website is running with a backend and it will upgrade
              with a dashboard !
            </p>
            <p id="my-p">
              Here, i can read your message and add - create or delete my
              project !
            </p>
          </div>
        </div>
        <div className="bloc2-projet-image">
          <img
            className="bloc2-projet-image-dashboard"
            alt="Dashboard"
            src={Dashboard}
          />
          <img
            className="bloc2-projet-image-messagerie"
            alt="Messagerie"
            src={Messagerie}
          />
        </div>
      </section>
    </div>
  );
}

export default Projet;
