import React from "react"
import "../styles/facilities.css"

const facilities = [
  {
    icon: "🌄",
    title: "Great Views",
    desc: "Enjoy beautiful nature views and peaceful surroundings throughout your stay.",
  },
  {
    icon: "🏊",
    title: "Swimming Pool",
    desc: "Relax and refresh yourself in our clean and well-maintained swimming pool.",
  },
  {
    icon: "☀️",
    title: "South Facing",
    desc: "Well-planned south-facing rooms with proper sunlight and ventilation.",
  },
  {
    icon: "📍",
    title: "Nice Location",
    desc: "Located in a peaceful area with easy access and close to nature.",
  },
]

export default function Facilities() {
  return (
    <section className="facilities-section">
      <div className="facilities-header">
        <h2>Our Facilities</h2>
        <p>
          Everything you need for a comfortable, peaceful, and memorable stay.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
