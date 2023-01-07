import React from "react";
import "../Header/Header.scss";

const Header = (props) => {
  return (
    <header className="Header" color="secondary">
      <div className="Header-inner">
        <h1 className="Title">Beer app</h1>
        <h2 className="Subtitle">{props.title}</h2>
        {props.secondTitle ? (
          <h2 className="Subtitle">{props.secondTitle} </h2>
        ) : null}
      </div>
    </header>
  );
};
export default Header;
