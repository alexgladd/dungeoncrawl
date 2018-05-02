import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    Version {process.env.REACT_APP_VERSION} &middot; Created by Alex Gladd &middot; Open source on Github
  </footer>
);

export default Footer;
