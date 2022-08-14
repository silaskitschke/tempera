import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <nav className={`Header ${props.className}`}>
      <Marquee gradient={false} className="Marquee-Header">
        <h3>Vincent van Gogh Claude Monet Leonardo da Vinci Michelangelo Jan Vermeer Paul Cézanne Paul Klee Wassily Kandinsky </h3> <h3>Vincent van Gogh Claude Monet Leonardo da Vinci Michelangelo Jan Vermeer Paul Cézanne Paul Klee Wassily Kandinsky </h3>
      </Marquee>
      <div className="pd-lr Nav-Bar">
        <Link to="/">
          <svg viewBox="0 0 457.29 58.8" height="100%">
            <path
              fill="black"
              d="M18.82,11.09H0V0H51.24V11.09h-18.82V58.8h-13.61V11.09Zm43.93-.17V0h45.53V58.8H63.84v-10.92h30.91v-12.77h-27.3v-10.58h27.3V10.92H62.75Zm114.07,47.88l-.08-35.28-17.3,29.06h-6.13l-17.22-28.31V58.8h-12.77V0h11.26l22.01,36.54L178.25,0h11.17l.17,58.8h-12.77ZM246.75,2.6c3.83,1.74,6.79,4.2,8.86,7.39,2.07,3.19,3.11,6.97,3.11,11.34s-1.04,8.08-3.11,11.3c-2.07,3.22-5.03,5.68-8.86,7.39-3.84,1.71-8.36,2.56-13.57,2.56h-11.84v16.21h-13.61V0h25.45c5.21,0,9.73,.87,13.57,2.6Zm-5,26.25c2.13-1.76,3.19-4.27,3.19-7.52s-1.06-5.84-3.19-7.6c-2.13-1.76-5.24-2.65-9.32-2.65h-11.09V31.5h11.09c4.09,0,7.2-.88,9.32-2.65Zm76.36,19.03v10.92h-45.53V0h44.44V10.92h-30.91v12.77h27.3v10.58h-27.3v13.61h32Zm52.5,10.92l-11.34-16.38h-12.52v16.38h-13.61V0h25.45c5.21,0,9.73,.87,13.57,2.6,3.83,1.74,6.79,4.2,8.86,7.39,2.07,3.19,3.11,6.97,3.11,11.34s-1.05,8.13-3.15,11.3c-2.1,3.16-5.08,5.59-8.95,7.27l13.19,18.9h-14.62Zm-3.44-45.07c-2.13-1.76-5.24-2.65-9.32-2.65h-11.09V31.58h11.09c4.09,0,7.2-.9,9.32-2.69,2.13-1.79,3.19-4.31,3.19-7.56s-1.06-5.84-3.19-7.6Zm70.64,32.47h-27.3l-5.21,12.6h-13.94L417.56,0h13.44l26.29,58.8h-14.28l-5.21-12.6Zm-4.28-10.33l-9.32-22.51-9.32,22.51h18.65Z"
            />
          </svg>
        </Link>
        <div className="Link-Collection">
          <h3>Entdecke Gemälde und ihre Künstler</h3>
          <div className="Nav-Links">
            <Link to="/legal">Impressum </Link>
            <Link to="/legal">Datenschutz </Link>
            <Link to="/">Home </Link>
            <Link to="/painting/7612"> Gemälde des Tages </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
