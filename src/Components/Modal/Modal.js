import React, { Component } from "react";

import "./Modal.css";

export class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="Modal" id="modal">
        <div className="modal-container">
          <div className="text-modal">
            <p>VOTRE MESSAGE À BIEN ETE ENVOYE</p>
            <div className="actions">
              <button className="primaryBtn" onClick={this.onClose}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
