import React from "react";
import { createPortal } from "react-dom";

function Title({ children }) {
  return <div>{children}</div>;
}

function FixedBottom({ children, isOpen }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: isOpen ? 0 : "-150px",
        left: 0,
        right: 0,
        height: 150,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

function FullScreen({ children, isOpen }) {
  return isOpen && <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "white",
      transition: "bottom 0.3s ease-in-out",
    }}
  >{children}</div>;
}

function CloseButton({ onClick }) {
  return (
    <button
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: "50%",
        backgroundColor: "white",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      X
    </button>
  );
}

function DimBody() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    ></div>
  );
}

function Dialog({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(<div>{children}</div>, document.getElementById("portal"));
}

Dialog.Title = Title;
Dialog.FixedBottom = FixedBottom;
Dialog.DimBody = DimBody;
Dialog.FullScreen = FullScreen;
Dialog.CloseButton = CloseButton;

export default Dialog;
