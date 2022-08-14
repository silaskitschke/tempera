import React from "react";
import Footer from "../Footer/Footer";
import logo from "../../img/logo.svg";

import "./LegalPage.scss";
import { Link } from "react-router-dom";
import AnimationPageWrapper from "../AnimationPageWrapper/AnimationPageWrapper";

function LegalPage() {
  return (
    <>
      <AnimationPageWrapper className="LegalPage Container pd-lr">
        <div className="LegalPage-Container ">
          <div>
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
            <Link to={"/"}>
              <div className="Back-Button">
                <h2>Zurück</h2>
              </div>
            </Link>
          </div>
        </div>
      </AnimationPageWrapper>
    </>
  );
}

export default LegalPage;
