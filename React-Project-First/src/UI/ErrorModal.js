import React from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onResolve} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onResolve}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onResolve={props.onResolve} />,
        document.querySelector("body")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onResolve={props.onResolve}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
