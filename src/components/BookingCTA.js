import React from "react"
import "../styles/booking-cta.css"

import ctaImg from "../images/cta.jpg"

export default function BookingCTA() {
  const whatsappNumber = "919740631908" // 🔴 CHANGE IF NEEDED

  const message =
    "Hello, I would like to book a stay at Hornbill Farmhouse. Please share room availability, pricing, and booking details."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
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

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn whatsapp"
        >
          📱 Book Now on WhatsApp
        </a>
      </div>
    </section>
  )
}
