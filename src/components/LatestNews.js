import React from "react"
import "../styles/latest-news.css"

import hero1 from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"

const newsData = [
  {
    image: hero1,
    title: "Celebrating 20th Anniversary of Hornbill Farmhouse",
    date: "June 5, 2024",
  },
  {
    image: hero2,
    title: "Our Farmhouse Rooms Have Been Newly Renovated",
    date: "June 5, 2024",
  },
  {
    image: hero3,
    title: "All Rooms Now Equipped With High-Speed WiFi",
    date: "June 5, 2024",
  },
]

export default function LatestNews() {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>Latest News</h2>
        <p>
          Stay updated with the latest announcements, upgrades, and special
          moments at Hornbill Farmhouse.
        </p>
      </div>

      <div className="news-grid">
        {newsData.map((item, index) => (
          <div className="news-card" key={index}>
            <div className="news-image">
              <img src={item.image} alt={item.title} />
              <span className="news-badge">News</span>
            </div>

            <div className="news-content">
              <h3>{item.title}</h3>
              <span className="news-date">📅 {item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
