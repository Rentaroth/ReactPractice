import React from 'react';
import {
  DiGithub,
  DiDocker,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMysql,
  DiMongodb,
  DiPostgresql,
  DiSass,
} from 'react-icons/di';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <section className="footer_contactme">
        <h3>Titulo</h3>
        <p>antonio@mail.com</p>
        <p>cel: 4658123478</p>
        <div className="footer_socialmedia--icons">
          <img alt=""></img>
          <img alt=""></img>
          <img alt=""></img>
        </div>
      </section>
      <section className="footer_knowledgeicons">
        <div className="icon">
          <DiGithub />
        </div>
        <div className="icon">
          <DiDocker />
        </div>
        <div className="icon">
          <DiHtml5 />
        </div>
        <div className="icon">
          <DiCss3 />
        </div>
        <div className="icon">
          <DiJsBadge />
        </div>
        <div className="icon">
          <DiReact />
        </div>
        <div className="icon">
          <DiNodejs />
        </div>
        <div className="icon">
          <DiMysql />
        </div>
        <div className="icon">
          <DiMongodb />
        </div>
        <div className="icon">
          <DiPostgresql />
        </div>
        <div className="icon">
          <DiSass />
        </div>
      </section>
    </footer>
  );
}

export { Footer };
