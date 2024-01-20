import "./home.scss";
import tatevik from "../../assets/images/tatevik.png";
import cssLogo from "../../assets/images/logos/css.svg";
import htmlLogo from "../../assets/images/logos/html.svg";
import jsLogo from "../../assets/images/logos/js.svg";
import reactLogo from "../../assets/images/logos/react.svg";
import sassLogo from "../../assets/images/logos/sass.svg";
import figmaLogo from "../../assets/images/logos/figma.svg";
import gitLogo from "../../assets/images/logos/git.png";
import reduxLogo from "../../assets/images/logos/redux.svg";
import weather from "../../assets/images/weather.png";
import filmsGif from "../../assets/images/films.gif";
import bookshopGif from "../../assets/images/bookshop.gif";
import agroGif from "../../assets/images/agro.gif";
import book from "../../assets/images/book.png";
import filmhub from "../../assets/images/filmhub.png";
import agro from "../../assets/images/agro.png";
import ContactForm from "../contactForm/ContactForm";


const Home = () => {
  const logos = [
    {
      name: "HTML",
      icon: htmlLogo,
    },
    {
      name: "CSS",
      icon: cssLogo,
    },
    {
      name: "Javascript",
      icon: jsLogo,
    },
    {
      name: "SASS",
      icon: sassLogo,
    },
    {
      name: "ReactJS",
      icon: reactLogo,
    },
    {
      name: "Redux",
      icon: reduxLogo,
    },
    {
      name: "Figma",
      icon: figmaLogo,
    },
    {
      name: "Git",
      icon: gitLogo,
    },
  ];

  const logos2 = [{}];

  return (
    <div className="home">
      <div className="home-container">
        <div className="homeBackground"></div>
        <div className="home-content">
          <h1>Hello, I'm Tatevik Sargsyan</h1>
          <h2>I'm a React JS Frontend developer</h2>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/tatsargsyan/">
              <span className="linkedin"></span>
            </a>
            <a href="https://github.com/thingamajig2">
              <span className="github"></span>
            </a>
          </div>
        </div>
        <div
          className="home-img"
          style={{ backgroundImage: `url("${tatevik}")` }}
        ></div>
      </div>
      <div className="aboutMe">
        <h1 className="aboutMeText">ABOUT ME</h1>
        <p>
        Hi! I'm from San Francisco, California. 
        I'm a React JS frontend developer. 
        I'm passionate and determined to help people's ideas come to life.
        </p>
      </div>
      <div className="explore">
        <div>EXPLORE</div>
      </div>
      <div className="separator">
        <div className="content"></div>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
      </div>
      <div className="contentLogo">
        <div className="logoGrid">
          <h2>USING NOW:</h2>
          {logos.slice(0,4).map((logo, i) => {
            return (
              <div className="skillLogos" key={i}>
                <div style={{ backgroundImage: `url("${logo.icon}")` }}></div>
                <span>{logo.name}</span>
              </div>
            );
          })}
        </div>
        <div className="logoGrid">
          <h2>LEARNING:</h2>
          {logos.slice(4,logos.length).map((logo, i) => {
            return (
              <div className="skillLogos" key={i}>
                <div style={{ backgroundImage: `url("${logo.icon}")` }}></div>
                <span>{logo.name}</span>
              </div>
            );
          })}
        </div>
      
    </div>
      <h1 className = "projectHeader">PROJECTS</h1>
      <div className = "projects">
        <div className = "bookshop"></div>
        <div className = "agro"></div>
        <div className = "films"></div>
        <div className = "weather"></div>
      </div >
          
      <div className = "contact">
        <span> CONTACT </span>
        <div></div>
        <ContactForm />
      </div>
  
    </div>
  );
};
export default Home;
