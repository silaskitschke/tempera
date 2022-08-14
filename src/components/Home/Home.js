import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import data from "store/paintings.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import aboutImage from "img/pexel.jpg";

import "./Home.scss";

import { usePaintingContext, useUpdatePaintingContext } from "../../store/ContextProvider";
import AnimationPageWrapper from "../AnimationPageWrapper/AnimationPageWrapper";

function Home() {
  // Store Functions(ReactContext)
  const updatePainting = useUpdatePaintingContext();
  const currentPainting = usePaintingContext();

  const getCurrentSwiperPainting = (swiper) => {
    let currentSwiperPainting = data.paintings.find((painting) => `${painting.id}` === swiper.slides[swiper.realIndex].getAttribute("id"));
    return currentSwiperPainting;
  };

  return (
    <AnimationPageWrapper className="Home">
      <div className="Home-Background" style={{ background: `linear-gradient(135deg, ${currentPainting.color} 0%, white 50%, ${currentPainting.color2} 100%)` }}></div>
      <div className="Home-Content-Container" style={{ borderColor: `${currentPainting.color}` }}>
        <div>
          <div className="Home-Swiper">
            <Swiper
              onSlideChange={(swiper) => {
                updatePainting(getCurrentSwiperPainting(swiper));
              }}
              spaceBetween={75}
              slidesPerView={"auto"}
              centeredSlides={true}
              loop={true}
              speed={1000}
              slideToClickedSlide={true}
              navigation
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".custom-pagination",
                enabled: true,
                clickable: true,
              }}
            >
              {data.paintings.map((painting) => (
                <SwiperSlide id={painting.id} key={painting.id}>
                  <div className="Swiper-Content">
                    <h1 className="Header-Background">{currentPainting.name}</h1>
                    <div className="Home-Title ">
                      <h2>{painting.name}</h2>
                      <p>{painting.teaser}</p>
                      <p>
                        <Link to={`/painting/${painting.id}`}>
                          <b>Zum Gemälde</b>
                        </Link>
                      </p>

                      <div className="Painting-Button"></div>
                    </div>
                  </div>
                  <img src={painting.url} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination"></div>
            <section className="Blog pd-lr">
              <div className="Container">
                <h1>Blog</h1>
                <div className="">
                  <ul className="Blog-Entries">
                    <li>
                      <Link to="/painting/8212">
                        <div className="Blog-Title">
                          <div className="gradient"></div>
                          <h2>Schlafzimmer in Arles</h2>
                        </div>
                        <img src="https://tempera.info/img/schlafzimmerarles.jpg"></img>
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <div className="Blog-Title">
                          <div className="gradient"></div>
                          <h2>Bald verfügbar</h2>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/608px-1665_Girl_with_a_Pearl_Earring.jpg"></img>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="Blog-Title">
                          <div className="gradient"></div>
                          <h2>Bald verfügbar! </h2>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/540px-Claude_Monet_1899_Nadar_crop.jpg"></img>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="Marquee">
              <Marquee gradient={false} speed={25} style={{ justifyContent: "space-between" }}>
                <h1>Abstrakt</h1>
                <h1>Expressionismus</h1>
                <h1>Barock</h1>
                <h1>Romantik</h1>
                <h1>Impressionismus</h1>
                <h1>Gotik</h1>
                <h1>Surrealismus</h1>
              </Marquee>
              <Marquee gradient={false} speed={50} style={{ justifyContent: "space-between" }}>
                <h1>Gotik</h1>
                <h1>Romantik</h1>
                <h1>Barock</h1>
                <h1>Expressionismus</h1>
                <h1>Impressionismus</h1>
                <h1>Abstrakt</h1>
                <h1>Surrealismus</h1>
              </Marquee>
            </section>
            <section className="About pd-lr">
              <div className="Container">
                <h1>Über</h1>
                <div className="About-Container">
                  <div>
                    <p>Tempera.info ist eine Plattform, die interessante Informationen über Gemälde und ihre Künstler bereitstellt. Es geht darum, Menschen für Kunst zu begeistern, ohne zu überfordern. Für weitere Informationen kontaktieren Sie mich.</p>
                    <div className="Back-Button">
                      <a href="mailto:mail@tempera.info">
                        <h2>mail@tempera.info</h2>
                      </a>
                    </div>
                  </div>

                  <img src={aboutImage} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AnimationPageWrapper>
  );
}

export default Home;
