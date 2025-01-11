import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import "../pages/css/WorkCase.css";

export default function WorkCase() {
  const [activeIndex, setActiveIndex] = useState(2); // Third card opened by default

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="work-cases">
      <div className="work-case-head home-all-head">
        <div className="work-case-head-left home-all-head-left">
          <div className="work-case-head-1 home-all-head-left-slogen">Solutions we built</div>
          <div className="work-case-head-below home-all-head-left-below">
            OUR WORK <span>& CASES</span>
          </div>
        </div>
        <div className="work-case-head-right">
          <div className="wc-head-button home-head-right-allbtn">
            See All
            <div className="wc-head-btn home-head-right-allbtn-arrow">
              <HiArrowCircleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="our-work">
        {[1, 2, 3].map((work, index) => (
          <div
            key={index}
            className={`work ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            work{work}
          </div>
        ))}
      </div>
    </div>
  );
}
