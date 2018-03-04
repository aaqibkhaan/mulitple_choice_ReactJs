/* eslint-disable */

import React, { Component } from "react";

import Modal from "react-responsive-modal";

import { Portal } from "react-portal";

class ShowModal extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { wrongAnswers, total } = this.props;

    // Displaying on the Modal
    const littleLorem = wrongAnswers.map(value => {
      return (
        <React.Fragment key={value.id}>
          <p>Q No. {value.id} )</p>
          <p>{value.question}</p>
          <p>Correct Answer : {value.correctAnswer}</p>
        </React.Fragment>
      );
    });

    const className = `${
      wrongAnswers.length > 0 || total > 0 ? "text-danger" : " "
    }`;

    // Portal Used to Display as a last node of id= pp
    return (
      <Portal node={document && document.getElementById("app")}>
        <div className={className}>
          <button
            className="btn btn-action text-right"
            onClick={this.onOpenModal}
          >
            Open
          </button>
          <Modal open={open} onClose={this.onCloseModal}>
            <h4>Total : {this.props.total} Out of 10</h4>
            <h5>Wrong Answers :</h5>
            {littleLorem}
          </Modal>
        </div>
      </Portal>
    );
  }
}

export default ShowModal;