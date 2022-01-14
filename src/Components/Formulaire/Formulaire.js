import React, { Component } from "react";
import axios from "axios";

// - import du css:
import "./Formulaire.css";

// - Import des Components :
import Modal from "../Modal/Modal.js";

// - Import des icons:
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BiMap } from "react-icons/bi";

export class Formulaire extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  state = {
    show: false
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Contact/Create", this.state)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.showModal();
        } else {
          alert("Requête échoué !");
        }
      });
  };

  render() {
    const { firstName, lastName, email, phone, message } = this.state;
    return (
      <div className="formulaire">
        <section className="bloc1-formulaire">
          <div className="title-formulaire">
            <h1>CONTACT INFORMATION</h1>
            <p>Fill up the form and i will get back to you within 24 hours.</p>
          </div>
          <div className="information-formulaire">
            <div className="iconText-formulaire">
              <i className="icon">
                <AiOutlinePhone />
              </i>
              <span className="text">06 28 47 38 69</span>
            </div>

            <div className="iconText-formulaire">
              <i className="icon">
                <FiMail />
              </i>
              <span className="text">loezicgwenael@gmail.com</span>
            </div>

            <div className="iconText-formulaire">
              <i className="icon">
                <BiMap />
              </i>
              <span className="text">Argenteuil, 95100</span>
            </div>
          </div>
          <div className="socialMedia-formulaire">
            <a href="facebook" className="icon-circle" id="facebook">
              <i className="social-icon">
                <a
                  id="facebook"
                  href="https://www.facebook.com/gwenael.loezic/"
                >
                  <FaFacebook />
                </a>
              </i>
            </a>
            <a href="github" className="icon-circle" id="github">
              <i className="social-icon">
                <a id="github" href="https://github.com/GwenLoezic">
                  <FaGithub />
                </a>
              </i>
            </a>
            <a href="linkedin" className="icon-circle" id="linkedin">
              <i className="social-icon">
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/in/gwena%C3%ABl-loezic-6b2154a0/"
                >
                  <FaLinkedin />
                </a>
              </i>
            </a>
            <a href="twitter" className="icon-circle" id="twitter">
              <i className="social-icon">
                <a id="twitter" href="https://twitter.com/?lang=fr">
                  <FaTwitter />
                </a>
              </i>
            </a>
          </div>
        </section>

        <section className="bloc2-formulaire">
          <form onSubmit={this.submitHandler}>
            <div className="group1">
              <div className="g1">
                <label className="label">First Name</label>
                <input
                  className="input-form"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.changeHandler}
                  required
                />
              </div>

              <div className="g1">
                <label className="label">Last Name</label>
                <input
                  className="input-form"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.changeHandler}
                  required
                />
              </div>
            </div>

            <div className="group2">
              <div className="g2">
                <label className="label">E-Mail</label>
                <input
                  className="input-form"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <div className="g2">
                <label className="label">Phone Number</label>
                <input
                  className="input-form"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.changeHandler}
                  required
                />
              </div>
            </div>

            <div className="bloc2-radioButton">
              <label className="label-question">
                What type of Website do you need?
              </label>
              <div className="container-radioButton">
                <div className="radioButton-container">
                  <input
                    className="radio-button"
                    id="radiopersonnal"
                    type="radio"
                    name="type"
                  />
                  <label className="label" htmlFor="radiopersonnal">
                    Personnal
                  </label>
                </div>

                <div className="radioButton-container">
                  <input
                    className="radio-button"
                    id="radioecommerce"
                    type="radio"
                    name="type"
                  />
                  <label className="label" htmlFor="radioecommerce">
                    E-commerce
                  </label>
                </div>

                <div className="radioButton-container">
                  <input
                    className="radio-button"
                    id="radiolandingpage"
                    type="radio"
                    name="type"
                  />
                  <label className="label" htmlFor="radiolandingpage">
                    Landing Page
                  </label>
                </div>
              </div>
            </div>
            <div className="message-formualaire">
              <label className="label-message">Message</label>
              <textarea
                className="message"
                type="text"
                name="message"
                value={message}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div className="btn-formulaire">
              <button className="primaryBtn" id="contact-Btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </section>
        <Modal onClose={this.showModal} show={this.state.show} />
      </div>
    );
  }
}

export default Formulaire;
