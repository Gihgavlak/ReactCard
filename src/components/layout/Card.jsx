import React from "react";
import "./Card.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div
    className="Card"
    style={{
      borderColor: props.cplor || "#000",
    }}
  >
    <div className="Conteudo">{props.children}</div>
    <div
      className="Footer"
      style={{
        backgroundColor: props.cplor || "#000",
      }}
    >
      {props.titulo}
    </div>
  </div>
);
