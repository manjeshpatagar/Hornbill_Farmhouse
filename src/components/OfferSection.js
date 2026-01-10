import React from "react"
import "../styles/offer-section.css"

import offerImg from "../images/offer.jpg"

export default function OfferSection() {
  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Image */}
        <div className="offer-image">
          <img src={offerImg} alt="Farmhouse Offer" />
        </div>

        {/* Content */}
        <div className="offer-content">
          <h2>25% Off Family Bookings in December</h2>

          <div className="divider"></div>

          <p>
            Enjoy a peaceful farmhouse stay with your family and get a special
            discount this December. Spacious rooms, nature views, and a calm
            environment perfect for relaxation.
          </p>

          <a href="/details" className="offer-btn">
            View Offer
          </a>
        </div>
      </div>
    </section>
  )
}
