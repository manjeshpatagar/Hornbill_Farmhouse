import React from "react"
import "../styles/facilities.css"

export default function Facilities() {
  return (
    <section className="facilities-section">
      <h2>Our Facilities</h2>

      <div className="facilities-grid">
        <div className="facility-item">
          <span className="icon">🌄</span>
          <h3>Great Views</h3>
          <p>
            Enjoy beautiful nature views and peaceful surroundings throughout
            your stay.
          </p>
        </div>

        <div className="facility-item">
          <span className="icon">🏊</span>
          <h3>Swimming Pool</h3>
          <p>
            Relax and refresh yourself in our clean and well-maintained swimming
            pool.
          </p>
        </div>

        <div className="facility-item">
          <span className="icon">☀️</span>
          <h3>South Facing</h3>
          <p>
            Well-planned south-facing rooms with proper sunlight and ventilation.
          </p>
        </div>

        <div className="facility-item">
          <span className="icon">📍</span>
          <h3>Nice Location</h3>
          <p>
            Located in a peaceful area with easy access and close to nature.
          </p>
        </div>
      </div>
    </section>
  )
}
