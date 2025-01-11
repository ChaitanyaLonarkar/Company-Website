import React from "react";
import { Link } from "react-router-dom";
import "../pages/css/Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-column-1">
        <div className="tars-logo">
          <span>THE Dev</span>
          <br /> TECHNOLOGIES
        </div>
        <p>EMPOWERING BUSINESS WITH IT EXPERTISE AND INNOVATION</p>
        <div className="social-icons">
          <a href="#">
            <IoLogoLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
        <div className="office">
          <b>OFFICES</b>
          <div className="office-location">
            <IoLocationSharp className="loc-i" />
            Pune, Maharashtra, India
          </div>
        </div>
      </div>
      <div className="footer-column">
        <h3>SERVICES</h3>
        <div className="line"></div>
        <ul>
          <li>
            <Link to="/seo">SEO</Link>
          </li>
          <li>
            <Link to="/website-design">Website Design</Link>
          </li>
          <li>
            <Link to="/mobile-applications">Mobile Applications</Link>
          </li>
          <li>
            <Link to="/software-development">Software Development</Link>
          </li>
          <li>
            <Link to="/digital-marketing">Digital Marketing</Link>
          </li>
          <li>
            <Link to="/domain-hosting">Domain Name & Hosting</Link>
          </li>
          <li>
            <Link to="/bulk-sms-mail">Bulk Sms & Mail</Link>
          </li>
          <li>
            <Link to="/it-consulting">IT Consulting</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>LINKS</h3>
        <div className="line"></div>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>COMPANY</h3>
        <div className="line"></div>

        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </div>
    </footer>
    <div className="ft-cp">
    @copyrights THE Dev TECHNOLOGIES
    </div>
    </>
  );
};

export default Footer;
