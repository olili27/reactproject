import React from "react";
import "./contact.css";

export default function ContactContainer() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div>
        <ContactOne />
      </div>
    </div>
  );
}

function ContactOne() {
  return (
    <div className="contact-items">
      <div>
        <p>Contact us and we will get ack to you within 24 hours</p>
        <ContactOneItems
          method="Kampala Uganda"
          icon={<i class="fas fa-map-marker-alt"></i>}
        />
        <ContactOneItems
          method="+256 775 800 900"
          icon={<i class="fas fa-mobile-alt"></i>}
        />
        <ContactOneItems
          method="company@gmail.com"
          icon={<i class="far fa-envelope fas"></i>}
        />
      </div>
      <ContactTwo />
    </div>
  );
}

function ContactOneItems(props) {
  return (
    <div className="contact-one-items">
      {props.icon}
      {props.method}
    </div>
  );
}

function ContactTwo() {
  return (
    <div className="contact-two">
      <p>Contact</p>
      <div>
        <input type="email" placeholder="email address" />
      </div>
      <div>
        <textarea placeholder="message" />
      </div>
    </div>
  );
}
