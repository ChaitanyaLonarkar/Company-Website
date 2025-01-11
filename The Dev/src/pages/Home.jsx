import "../pages/css/Home.css";
import { MdOutlineNavigateNext } from "react-icons/md";

import ServicesCapablities from "../components/ServicesCapablities";
import WorkCase from "../components/WorkCase";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// import Vector from "."
const Home = () => {
  const states = [
    { value: "70+", desc: "Solutions Delivered" },
    { value: "20+", desc: "Trusted Clients" },
    { value: "2016", desc: "Helping Businesses Since" },
    { value: "10+", desc: "Services For Businesses" },
  ];

  const companies = [
    'Vector.png',
    'Vector.png',
    'Vector.png',
    'Vector.png',
  ];
  return (
    <>
      <div className="home">
        <div className="landing-home">
          <div className="hero-section">
            <div className="hero-heading">
              SECURE YOUR INFRASTURCTURE WITH <b className="the-dev">THE Dev</b>
            </div>
            <div className="hero-s-text">
              We give businesses recognition with powerful and <br />
              adaptable digitalsolutions to gain a competitive edge.
            </div>
            <Link to="/hire-us" className="lets-talk">
                Let's Talk
                <MdOutlineNavigateNext />
            </Link>
          </div>
        </div>
        <div className="grid-svg">
          <img src="/pattern.svg" alt="" className="pattern-1" />
          <img src="/pattern.svg" alt="" className="pattern-2" />
        </div>
        {/* Section States */}
        <div className="states-sec">
          <div className="all-states">
            {states.map((state, index) => (
            <div key={index}  className="state">
                <div className="state-nums">{state.value}</div>
                <div className="state-des">{state.desc}</div>
              </div>
            ))}
          </div>
          <Marquee autoFill='true'>
          {companies.concat(companies).map((logo, index) => (
            <img key={index} src={logo} className="logo" alt={`Logo ${index}`} />
          ))}
        </Marquee>
        </div>

       <ServicesCapablities/>
       <WorkCase/>
       <Testimonials/>
       <Contact/>
      </div>
    </>
  );
};

export default Home;
