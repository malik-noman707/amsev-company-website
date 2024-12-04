import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <img 
                src="../img/intro-bg.gif" 
                alt="Background" 
                className="img-fluid responsive-image"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};