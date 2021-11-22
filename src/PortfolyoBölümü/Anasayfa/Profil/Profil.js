import React from "react";
import Typical from "react-typical";
import './Profil.css';

export default function Profile() {
  return (
    /*İcon Bölümü*/
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="columnz">
            <div className="columnz-icon">
              <a href="https://www.instagram.com/barkinezze/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCUaq25NrD3af5ubfP9_2duA">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/barkn00072558">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://github.com/developerbarkinez">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {""}
            Merhaba,Ben <span className="highlighted-text">Barkın</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {""}
            <h1>
              {""}
              <Typical
                loop={Infinity}
                steps={[
                  "Full Stack Developer",
                  1000,
                  "Software Architect",
                  1000,
                  "Test Engineer",
                  1000,
                  "React/React Native Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                ]}
              ></Typical>
            </h1>
            <span className="profile-role-tagline">
              Gelişen yazılımsal ihtiyaçlara pratik çözümler üretirim ve akılcı
              bir yaklaşımla uygulamaya koyabilirim.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Benimle İletişim Kur!{""}
          </button>
          <a href="Barkın.pdf" download="CV.pdf">
            <button className="btn highlighted-btn">Özgeçmişimi İndir!</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background">
          
        </div>
      </div>
    </div>
  );
}
