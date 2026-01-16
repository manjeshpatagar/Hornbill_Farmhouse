import React from "react"
import "../styles/offer-section.css"

import offerImg from "../images/offer.jpg"

export default function OfferSection() {
  const whatsappNumber = "918105220038" // 🔴 CHANGE TO YOUR NUMBER

  const message =
    "Hello, I am interested in the 25% OFF Family Booking offer at Hornbill Farmhouse. Please share details and availability."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* IMAGE */}
        <div className="offer-image">
          <img src={offerImg} alt="Farmhouse Offer" />
          <span className="offer-badge">25% OFF</span>
        </div>

        {/* CONTENT */}
        <div className="offer-content">
          <h2>
          <span>25% Off</span> Special Offer for Family Bookings
          </h2>

          <div className="divider"></div>

          <p>
            Enjoy a peaceful farmhouse stay with your family and get a special
            December discount. Spacious rooms, nature views, and a calm
            environment perfect for relaxation.
          </p>

          {/* WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="offer-btn whatsapp"
          >
            📱 Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
