import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            deserunt velit ut aspernatur hic aliquam corporis enim fuga
            repellat. Atque dignissimos consequuntur molestiae molestias
            architecto.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/joshanumah"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/joshanumah"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/joshanumah"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>PermaLinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainer">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="/trainer">Events</Link>
          <Link to="/gallery">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/support">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small> 2022 Ernie &copy; All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
