import React, { Component } from "react";
import axios from "axios";

import "./CardProjet.css";

export class CardProjet extends Component {
  state = {
    projet: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/Projet/Read`).then((res) => {
      const projet = res.data;
      this.setState({ projet });
    });
  }
  render() {
    return (
      <div className="projetRead">
        {this.state.projet.map((projet) => {
          return (
            <div className="cardProjet-container">
              <section className="section1-picture">
                <img src={projet.urlImage} alt="" className="img1" />
                {}
              </section>

              <section className="section2-projet">
                <div className="section2-title">
                  <h1>{projet.titre}</h1>
                </div>

                <div className="section2-description">
                  <p>{projet.description}</p>
                </div>

                <div className="section2-Btn">
                  <button href={projet.urlProjet} className="primaryBtn">
                    <a id="cv" href={projet.urlProjet}>
                      View More
                    </a>
                  </button>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardProjet;
