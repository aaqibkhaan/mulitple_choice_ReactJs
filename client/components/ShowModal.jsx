import React, { Component } from "react";

import Modal from "react-responsive-modal";

import { Portal } from "react-portal";

import styled from "styled-components";

import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  border-top: 1px solid #2098d1;
`;

class ShowModal extends Component {
  state = {
    open: false
  };

  // Comparing next props and Setting the Modal State Property

  componentWillReceiveProps(nextProps) {
    if (this.props.wrongAnswers !== nextProps.wrongAnswers) {
      this.setState({ open: true });
    }
  }
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
    const asnwersData = wrongAnswers.map(value =>
      /* React Fragment added to group childrens without adding extra node to the DOM
       More Here : https://reactjs.org/docs/fragments.html */

        <ModalWrapper className="grey" key={value.id}>
          <React.Fragment>
            <p>No. {value.id} )</p>
            <p>{value.question}</p>
            <p>Correct Answer : {value.correctAnswer}</p>
          </React.Fragment>
        </ModalWrapper>
    );

    const className = `${
      wrongAnswers.length > 0 || total > 0 ? "text-danger" : " "
    }`;

    // Portal Used to Display as a last node of id= pp
    return (
      <Portal node={document && document.getElementById("app")}>
        <div className={className}>
          {this.props.wrongAnswers.length > 0 || this.props.total > 0 ? (
            <Modal open={open} onClose={this.onCloseModal}>
              <h4 className="padding-bottom-top blue">
                Total : {this.props.total} Out of 10
              </h4>
              {this.props.total !== 10 ? (
                <h5 className="padding-bottom">Wrong Answers :</h5>
              ) : (
                <h5>All Answers are Correct</h5>
              )}
              {asnwersData}
            </Modal>
          ) : (
            <div/>
          )}
        </div>
      </Portal>
    );
  }
}

ShowModal.propTypes = {
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired
};

export default ShowModal;