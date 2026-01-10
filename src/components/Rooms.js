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
  },
  {
    image: room2,
    title: "King Room",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "Nature",
    price: "₹5300 / Night",
  },
  {
    image: room3,
    title: "Standard Room",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "Garden",
    price: "₹3200 / Night",
  },
]

export default function Rooms() {
  return (
    <section className="rooms-section">
      <div className="rooms-header">
        <h2>Our Rooms</h2>
        <p>
          Comfortable, clean and peaceful rooms surrounded by nature for a
          relaxing farmhouse stay.
        </p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.title} />

            <div className="room-content">
              <h3>{room.title}</h3>

              <ul>
                <li>👤 Capacity: {room.capacity}</li>
                <li>📐 Size: {room.size}</li>
                <li>🌿 View: {room.view}</li>
              </ul>

              <div className="room-footer">
                <span>{room.price}</span>
                <a href="/details">View Room</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
