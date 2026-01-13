import React from "react"
import "../styles/rooms.css"

import room1 from "../images/room1.jpg"
import room2 from "../images/room2.jpg"
import room3 from "../images/room3.jpg"

const rooms = [
  {
    image: room1,
    title: "Ensuite Room",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "Garden",
    price: "₹4500 / Night",
    discount: "10% OFF",
  },
  {
    image: room2,
    title: "King Room",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "Nature",
    price: "₹5300 / Night",
    discount: "15% OFF",
  },
  {
    image: room3,
    title: "Standard Room",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "Garden",
    price: "₹3200 / Night",
    discount: "Best Price",
  },
]

export default function Rooms() {
  const whatsappNumber = "918105220038" // CHANGE THIS

  return (
    <section className="rooms-section">
      <div className="rooms-header">
        <h2>Our Rooms</h2>
        <p>
          Comfortable, peaceful rooms surrounded by nature for a relaxing
          farmhouse stay.
        </p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room, index) => {
          const message = `Hello, I want to book the ${room.title} at Hornbill Farmhouse. Please share availability and details.`
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`

          return (
            <div className="room-card" key={index}>
              {/* IMAGE */}
              <div className="room-image">
                <img src={room.image} alt={room.title} />
                <span className="discount-badge">{room.discount}</span>
              </div>

              {/* CONTENT */}
              <div className="room-content">
                <h3>{room.title}</h3>

                <ul>
                  <li>👤 Capacity: {room.capacity}</li>
                  <li>📐 Size: {room.size}</li>
                  <li>🌿 View: {room.view}</li>
                </ul>

                {/* FOOTER */}
                <div className="room-footer">
                  <span className="price">{room.price}</span>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    📱 Book Now
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
