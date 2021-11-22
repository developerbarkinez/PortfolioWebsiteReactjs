import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Özgeçmiş.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* Label üzerindeki datayı çekiyoruz*/
  const resumeBullets = [
    { label: "Akademik Eğitim", logoSrc: "education.svg" },
    { label: "Çalışma Geçmişi", logoSrc: "work-history.svg" },
    { label: "Programlama Becerileri", logoSrc: "programming-skills.svg" },
    { label: "Projeler", logoSrc: "projects.svg" },
    { label: "Hobiler", logoSrc: "interests.svg" },
  ];

  //Label Üzerindeki Dataları Buraya Aktardım.
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "İlk Özgeçmiş Websitem",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Bu projeyi uygulamamın amacı şu ana kadar yaptığım herşeyi bir arada toplamaktı.",
      subHeading: "Kullanılan Teknolojiler: React JS, Bootsrap",
    },
    {
      title: "Mobile E-Ticaret ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Bir mobil e-ticaret websitesi yaptım tabiki hatalar oluştu ancak yine de istediğim amaca ulaştım.",
      subHeading:
        "Kullanılan Teknolojiler:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "E-Ticaret Responsive Web-Sitesi ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Paypal ve Stripe entegrasyonu olan yabancı kökenli bir e-ticaret sitesi geliştirdim.",
      subHeading:
        "Kullanılan Teknolojiler: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Akdeniz Bilim ve Araştırma Üniversitesi"}
        subHeading={"Yazılım Mühendisliği"}
        fromDate={"2020"}
        toDate={"Devam ediyor"}
      />

      <ResumeHeading
        heading={"Yaşar Üniversitesi"}
        subHeading={"Bilgisayar Programcılığı 3. olarak dereceyle bitirdim."}
        fromDate={"2018"}
        toDate={"2020"}
      />
    </div>,

    /* Çalışma Deneyimi Section */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={""}
          subHeading={"IZSU"}
          fromDate={"2019"}
          toDate={"Haziran"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            IT ve donanım anlamında adını duyduğum bu şirket tecrübe kazanmamda bir numaralı yer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Backend metodojileri hakkında bilgi sahibi oldum ve olmaya devam ediyorum.
          </span>
          <br />
          <span className="resume-description-text">
            Bir web uygulamasına framework entegre ederken minimum masrafla maksimum iş nasıl çıkarılır bunu öğrendim.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            UI geliştirmek benim mental kapasitemi arttırdı.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* Programlama Becerileri Bölümü*/
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Projeler */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Öğretici"
        description="İnsanlara birşeyler öğretip üretmesini sağlamaktan mutluluk duyarım."
      />
      <ResumeHeading
        heading="Müzisyen"
        description="Müzik dinlemek ve bunu profesyonel anlamda aranjesini yapmak bir numaralı hedefim her zaman."
      />
      <ResumeHeading
        heading="Oyuncu"
        description="Arkadaşlarımla boş zamanımda oyun oynamayı severim.Çünkü insanın yaratıcılığını arttırdığını düşünüyorum."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Özgeçmiş/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Yaptığım İşler Ve Özgeçmiş"} subHeading={"Yaptığım işler ve Özgeçmiş Detayları"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
