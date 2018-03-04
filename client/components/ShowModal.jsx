/* eslint-disable */

import React, { Component } from "react";

import Modal from "react-responsive-modal";

import { Portal } from "react-portal";


import styled from "styled-components";

const ModalWrapper = styled.div`
padding-top : 1em;
padding-bottom : 1em; 
border-top: 1px solid #2098d1;
`;

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

    // Displaying the Modal
    const asnwersData = wrongAnswers.map(value => {

      /* React Fragment added to group childrens without adding extra node to the DOM
       More Here : https://reactjs.org/docs/fragments.html */

      return (
        <ModalWrapper className="grey" key={value.id}>
        <React.Fragment  >
          <p>No. {value.id} )</p>
          <p>{value.question}</p>
          <p>Correct Answer : {value.correctAnswer}</p>
        </React.Fragment>
        </ModalWrapper>
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
            className="btn btn-action text-right modal-button"
            onClick={this.onOpenModal}
          >
            Click Here to View the Wrong Answers
          </button>
          <Modal open={open} onClose={this.onCloseModal}>
            <h4 className="padding-bottom-top blue">Total : {this.props.total} Out of 10</h4>
            {this.props.total !== 10 ?
              <h5 className="padding-bottom">Wrong Answers :</h5>
          : <h5>All Answers are Correct</h5>} 
            {asnwersData}
          </Modal>
        </div>
      </Portal>
    );
  }
}

export default ShowModal;