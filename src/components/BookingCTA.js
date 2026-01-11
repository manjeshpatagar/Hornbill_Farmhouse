import React from "react"
import "../styles/booking-cta.css"

import ctaImg from "../images/cta.jpg"

export default function BookingCTA() {
  return (
    <>
      <div>
        <section
          className="booking-cta"
          style={{ backgroundImage: `url(${ctaImg})` }}
        >
          <div className="cta-overlay"></div>

          <div className="cta-content">
            <h2>
              Book online today and look forward to a <br />
              relaxing stay with us
            </h2>

            <p>
              Call us on <strong>+91 97406 31908</strong> or email{" "}
              <strong>booking@hornbillfarmhouse.com</strong>
            </p>

            <a href="/details" className="cta-btn">
              Book Now
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
