import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./ServicesCapablities.css";
import { Link } from "react-router-dom";
export default function ServicesCapablities() {
  const services = [
    {
      name: "WEBSITE DEVELOPMENT",
      desc: "Get professional web solutions with our expert development and design services. We craft custom, user-friendly websites that elevate your brand and engage your audience.",
    },
    {
      name: "MOBILE APP DEVELOPMENT",
      desc: "Get professional web solutions with our expert development and design services. We craft custom, user-friendly websites that elevate your brand and engage your audience.",
    },
    {
      name: "SOFTWARE DEVELOPMENT",
      desc: "Get professional web solutions with our expert development and design services. We craft custom, user-friendly websites that elevate your brand and engage your audience.",
    },
  ];
  return (
    <>
      {/*Service and Capablities */}
      <div className="service-capablities">
        <div className="sc-head home-all-head ">
          <div className="sc-head-left home-all-head-left">
            <div className="sc-head-slogen home-all-head-left-slogen">
              Committed to Your Growth & Success
            </div>
            <div className="sc-headline-below home-all-head-left-below">
              OUR SERVICES <span>& CAPABILITIES</span>
            </div>
          </div>
          <div className="sc-head-right home-all-head-right">
            <div className="sc-head-button home-head-right-allbtn">
              {/* <Link> */}
                See All
                <div className="sc-head-button-btn home-head-right-allbtn-arrow">
                  <HiArrowCircleRight />
                </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="sc-courses">
          {services.map((service,index) => (
            <div key={index} className="sc-service">
              <div className="sc-name">{service.name}</div>
              <div className="sc-desc">{service.desc}</div>
              <div className="sc-learnmore">
                Learn More
                <HiOutlineArrowNarrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
