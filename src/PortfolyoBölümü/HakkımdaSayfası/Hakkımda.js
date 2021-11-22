import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Hakkımda.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Güçlü problem becerileri ile test odaklı bir ortamda yazılım oluşturma ve tasarlama konusunda kanıtlanmış deneyime sahip bir yazılım geliştiricisiyim.",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile Geliştiricisi",
        "İnteraktif kullanıcı-dostu ve Responsive Tasarımlar",
        "React ve React Native Üzerine Kanıtlanmış Deneyim",
        "Redux ile State Yönetimi",
        "Rest API Build Etme",
        "Veritabanı Yönetimi",
      ],
      heading: "Size üzerinde çalıştığım birkaç teknolojiyi açıklamak isterim:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"Hakkımda"} subHeading={"Neden beni tercih etmelisiniz?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Benimle İletişim Kur! </button>
              <a href="Barkın.pdf" download="CV.pdf">
                <button className="btn highlighted-btn">CV'mi indir!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
