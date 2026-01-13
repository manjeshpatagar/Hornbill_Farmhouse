import React, { useEffect, useState } from "react"
import "../styles/hero-slider.css"

// ✅ Import images (Webpack will handle paths)
import hero1 from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"

// Image array
const images = [hero1, hero2, hero3]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // WhatsApp details
  const whatsappNumber = "918105220038"
  const message = encodeURIComponent(
    "Hello, I would like to enquire about farmhouse booking."
  )

  return (
    <section className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          Hornbill <br />
          Farmhouse
        </h1>
        <p>Nature • Peace • Comfort</p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Booking Enquiry
        </a>
      </div>

      {/* Navigation arrows */}
      <button
        className="arrow left"
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
      >
        ‹
      </button>

      <button
        className="arrow right"
        onClick={() =>
          setCurrent((current + 1) % images.length)
        }
      >
        ›
      </button>
    </section>
  )
}
