import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header id="header" className="alt skel-layers-fixed">
      <h1>
        <a href="index.html">
          HTML5 Website <span>by Html5webtemplates.co.uk</span>
        </a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a onClick={() => navigate("/employee-table")}>Employee Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
