import React from "react";
import Footer from "../Footer/Footer";
import logo from "../../img/logo.svg";

import "./LegalPage.scss";
import { Link } from "react-router-dom";
import AnimationPageWrapper from "../AnimationPageWrapper/AnimationPageWrapper";

function LegalPage() {
  return (
    <>
      <AnimationPageWrapper className="LegalPage Container">
        <div className="LegalPage-Container">
          <div>
            <Link className="Return-Nav" to={`/`}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
              </svg>
              Zurück zur Auswahl
            </Link>

            <div className="LegalPage-Content">
              <h1>
                <span className="nowrap">Impressum &</span> <br />
                Datenschutz
              </h1>
              <p>
                Da es sich bei Tempera.info um eine private Website handelt, die nicht geschäftsmäßig, im Sinne des Telemediengesetz (TMG) § 5, operiert, besteht keine Impressumspflicht. Dennoch besteht die Möglichkeit mich über folgende E-Mail zu kontaktieren:
                <br />
                <br />
                <div className="LegalPage-Kontakt">
                  Silas Kitschke
                  <br />
                  <a href="mailto:mail@silaskitschke.de">mail@silaskitschke.de</a>
                </div>
                <br />
                <br />
                Außerdem erhebt Tempera.info keine Daten von seinen Nutzern. Es werden keine Cookies gesetzt oder anderweitig persönliche Daten gespeichert.
              </p>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </AnimationPageWrapper>
    </>
  );
}

export default LegalPage;
