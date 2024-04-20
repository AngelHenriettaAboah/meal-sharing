import React from "react";
import fLogo from "./images/fLogo.jpg";
import instaLogo from "./images/instaLogo.jpg";
import twitterLogo from "./images/twitterLogo.jpg";
import { Link } from "react-router-dom";
import "./footer.css";
export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <Link to="/">
            <img className="logo" src={fLogo} alt="facebook-logo" />
          </Link>
          <Link to="/">
            <img className="logo" src={instaLogo} alt="insta-logo" />
          </Link>
          <Link to="/">
            <img className="logo" src={twitterLogo} alt="twitter-logo" />
          </Link>
        </div>
        <div className="contacts-container">
          <h3 className="text-footer">Contact Us</h3>
          <p className="contacts"> myInfo@gmail.com</p>
          <p className="contacts"> 222 222 222</p>
          <p className="contacts"> 10:00am - 7:00pm</p>
          <p className="contacts">Søren Vej 5, Aarhus</p>
        </div>
        <div className="footer-navigation">
          <h3 className="text-footer">Menu</h3>
          <p>
            {" "}
            <Link to="/" className="nav-link-footer">
              HOME
            </Link>
          </p>
          <p>
            {" "}
            <Link to="/meals" className="nav-link-footer">
              MEALS
            </Link>
          </p>
          <p>
            {" "}
            <Link to="/portfolio" className="nav-link-footer">
              PORTFOLIO
            </Link>
          </p>
          <p>
            <Link to="/blog" className="nav-link-footer">
              BLOG
            </Link>
          </p>
        </div>
      </div>
      <p className="footer-end">
        <span>created by A.A. Designs</span>
      </p>
    </footer>
  );
}
