import React from "react";
import "./Header.css";

function Header (props) {
  return (
    <header>
      <section className="header_bg">
        <div className="header_profile-photo">
          <img src="" alt=""></img>
        </div>
        <nav className="navBar">
          <ul className="navBar_list">
            <li><a href="./">Home</a></li>
            <li><a href="./">Formation</a></li>
            <li><a href="./">Portfolio</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export { Header }