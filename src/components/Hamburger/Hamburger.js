import React from "react";
import { Div, Span1, Span2, Span3, Span4 } from "./Hamburger.style";

const Hamburger = ({ isOpen, hamburgerClicked }) => {
  return (
    <Div isOpen={isOpen} onClick={hamburgerClicked}>
      <Span1 isOpen={isOpen}></Span1>
      <Span2 isOpen={isOpen}></Span2>
      <Span3 isOpen={isOpen}></Span3>
      <Span4 isOpen={isOpen}></Span4>
    </Div>
  );
};

export default Hamburger;