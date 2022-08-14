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
        <AnimationPageWrapper className="Painting-Page ">
          <div className="Container pd-lr">
            <div className="Painting-Page-Header ">
              <h3>{Painting.artist}</h3>
              <h1>{Painting.name}</h1>
            </div>
          </div>

          <div className="Painting-Page-Content-Wrapper ">
            <div className="Painting-Page-Content">
              <div className="Painting-Page-Image Container ">
                <div className="Painting-Page-Image-Background "></div>
                <img src={Painting.url} />
                <p className="Painting-Description  ">
                  <b>{`${Painting.name}`}</b>
                  <br />
                  <div>{Painting.artist}</div>
                </p>
              </div>
              <div className="Container pd-lr">
                <div className="Painting-Page-Text ">
                  <div>
                    <p>{Painting.text}</p>
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
                <Link to={"/"}>
                  <div className="Back-Button">
                    <h2>Zurück</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </AnimationPageWrapper>
      )}
    </>
  );
}

export default PaintingPage;
