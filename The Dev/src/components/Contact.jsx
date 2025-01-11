import React from "react";
import "../pages/css/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="home-contact">
        <div className="blue-contact">
          <div className="contactform">
            <div className="contact-heading">
              READY TO BRING YOUR IDEAS TO LIFE?
            </div>
            <form
              action="
                "
            >
              <div className="flex">
                <div className="service">
                    <input type="text" placeholder="Service" />
                </div>
                
                <input type="email" placeholder="Email" />
              </div>
              <div className="flex">
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Phone Number" />
              </div>
              <textarea type="textarea" placeholder="Description"
              rows="4" />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="blue-right">
            <div className="img"></div>
            <div className="motivation">
              “We value your ideas and are here to help bring them to life.”
            </div>
            <div className="line">
              <hr />
            </div>
            <div className="ceo">
              <div className="ceo-name">Chaitanya</div>
              <div className="ceo-details">CEO & Founder (THE Dev Technology)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
