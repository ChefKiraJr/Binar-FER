import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope">
            <span className="label">Envelope</span>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <span className="copyright">
        &copy; Copyright. All rights reserved. Design by{' '}
        <a href="http://www.html5webtemplates.co.uk">
          Responsive Web Templates
        </a>
      </span>
    </footer>
  );
};

export default Footer;
