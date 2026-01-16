import React from "react"
import "../styles/facilities.css"

const facilities = [
  {
    icon: "🌄",
    title: "Breathtaking Views",
    desc: "Wake up to stunning natural landscapes and peaceful surroundings that create a truly relaxing experience.",
  },
  {
    icon: "📍",
    title: "Prime Location",
    desc: "Located in a serene yet well-connected area, offering privacy, convenience, and easy accessibility.",
  },
  {
    icon: "🚗",
    title: "Private Parking",
    desc: "Spacious and secure parking space available for guests, ensuring complete comfort and peace of mind.",
  },
  {
    icon: "🏖️",
    title: "Near the Beach",
    desc: "Just a short distance from the beach, perfect for enjoying sea breezes, sunsets, and coastal relaxation.",
  },
  {
    icon: "🚙",
    title: "Vehicle Rental Assistance",
    desc: "Convenient support and guidance for renting vehicles to explore nearby attractions comfortably.",
  },
  {
    icon: "🍽️",
    title: "Healthy Dining Guidance",
    desc: "Carefully selected recommendations for hygienic restaurants offering fresh, healthy, and delicious meals.",
  },
];


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
