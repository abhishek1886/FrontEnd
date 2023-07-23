import React from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  const elementOverlay = document.getElementById("overlays");
  return(
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, elementOverlay)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, elementOverlay)}
    </React.Fragment>
  );
};

export default Modal;
