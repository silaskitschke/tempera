import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

import "./StartPage.scss";
import logo from "img/logo.png";
import { Link } from "react-router-dom";

import AnimationPageWrapper from "../AnimationPageWrapper/AnimationPageWrapper";

function StartPage() {
  return (
    <AnimationPageWrapper className="StartPage pd-lr">
      <div className="StartPage-Content">
        <img src={logo} className="Logo" />
        <p>Erforsche die Hintergründe bekannter Gemälde</p>

        <Link className="StartPage-Button-Container" to="/home">
          <span className="StartPage-Button">
            WEITER
            <svg viewBox="0 0 20 23" preserveAspectRatio="none">
              <path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M17.832,8.852 C19.807,10.012 19.807,12.868 17.832,14.027 L4.781,21.685 C2.781,22.859 0.262,21.417 0.262,19.098 L0.262,3.782 C0.262,1.463 2.781,0.021 4.781,1.194 L17.832,8.852 Z" />
            </svg>
          </span>
        </Link>
      </div>
      <Footer className="Start-Footer"></Footer>
    </AnimationPageWrapper>
  );
}

export default StartPage;
