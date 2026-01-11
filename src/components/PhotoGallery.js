import React from "react"
import "../styles/photo-gallery.css"

import g1 from "../images/gallery1.jpg"
import g2 from "../images/gallery2.jpg"
import g3 from "../images/gallery3.jpg"


const images = [g1, g2, g3, ]

export default function PhotoGallery() {
  return (
    <section className="gallery-section">
      <h2>Photo Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
