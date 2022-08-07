import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./PaintingPage.scss";

import data from "../../store/paintings.json";

import AnimationPageWrapper from "../AnimationPageWrapper/AnimationPageWrapper";

function PaintingPage() {
  const { id } = useParams();
  const [Painting, setPainting] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const painting = data.paintings.find((el) => `${el.id}` === id);
    setPainting(painting);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading == false && (
        <AnimationPageWrapper className="Painting-Page">
          <div className="Container">
            <Link className="Return-Nav" to={`/home`}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
              </svg>
              Zurück zur Auswahl
            </Link>

            <div className="Painting-Page-Header">
              <h3 style={{ color: `${Painting.color}` }}>{Painting.artist}</h3>
              <h1 style={{ background: `linear-gradient(45deg, ${Painting.color} 0%, ${Painting.color2} 100%)` }}>{Painting.name}</h1>
            </div>
          </div>

          <div className="Painting-Page-Content-Wrapper">
            <div className="Painting-Page-Content ">
              <div className="Painting-Page-Image Container">
                <div className="Painting-Page-Image-Background"></div>
                <img src={Painting.url} />
              </div>
              <div className="Container ">
                <div className="Painting-Page-Text">
                  <div>
                    <p>{Painting.text}</p>
                    <Link className="Return-Nav" to={`/home`}>
                      Zurück zur Auswahl
                    </Link>
                  </div>
                  <ul className="Painting-Page-Info">
                    <li>
                      <h3>Jahr:</h3>
                      <h3>{Painting.year}</h3>
                    </li>
                    <li>
                      <h3>Künstler:</h3>
                      <h3>{Painting.artist}</h3>
                    </li>
                    <li>
                      <h3>Stil:</h3>
                      <h3>{Painting.style}</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Footer className="Container"></Footer>
          </div>
        </AnimationPageWrapper>
      )}
    </>
  );
}

export default PaintingPage;
