import "../pages/css/Testimonials.css";
import { HiArrowCircleRight } from "react-icons/hi";

import "../pages/css/WorkCase.css";
import Marquee from "react-fast-marquee";
export default function Testimonials() {
  const testi = [
    {
      name: "Chaitanya Lonarkar",
      workas: "MERN Developer",
      profile: "/pic.jpg",
      saying: "THE Dev's Services are OutStandng",
    },
    {
      name: "Chaitanya Lonarkar",
      workas: "MERN Developer",
      profile: "/pic.jpg",
      saying: "THE Dev's Services are OutStandng",
    },
    {
      name: "Chaitanya Lonarkar",
      workas: "MERN Developer",
      profile: "/pic.jpg",
      saying: "THE Dev's Services are OutStandng",
    },
    {
      name: "Chaitanya Lonarkar",
      workas: "MERN Developer",
      profile: "/pic.jpg",
      saying: "THE Dev's Services are OutStandng",
    },
  ];
  return (
    <>
      <div className="testimonials">
        <div className="testimonials-head home-all-head ">
          <div className="testimonials-head-left home-all-head-left">
            <div className="testimonials-head-1 home-all-head-left-slogen">
              Our Satisfied Clients says
            </div>
            <div className="testimonials-head-below home-all-head-left-below">
              TESTIMONIALS <span>& REVIEWS </span>
            </div>
          </div>
          <div className="testimonials-head-right">
            <div className="testimonials-button home-head-right-allbtn">
              {/* <Link> */}
              See All
              <div className="testimonials-head-btn home-head-right-allbtn-arrow">
                <HiArrowCircleRight />
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>

        <div className="testi-all">
          <div className="all-testimonials">
            <Marquee>
              {testi.map((t,id) => (
                <div key={id} className="testimonial">
                  <div className="ts-head">
                    <div className="ts-pic">
                      <img src={t.profile} alt="" />
                    </div>
                    <div className="ts-name-detail">
                      <div className="ts-name">{t.name}</div>
                      <div className="ts-work">{t.workas}</div>
                    </div>
                  </div>
                  <div className="ts-thought">{t.saying}</div>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="all-testimonials">
            <Marquee direction="right">
              {testi.map((t,id) => (
                <div key={id} className="testimonial">
                  <div className="ts-head">
                    <div className="ts-pic">
                      <img src={t.profile} alt="" width={60} />
                    </div>
                    <div className="ts-name-detail">
                      <div className="ts-name">{t.name}</div>
                      <div className="ts-work">{t.workas}</div>
                    </div>
                  </div>
                  <div className="ts-thought">{t.saying}</div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
