import React from "react"
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer-top">
        {/* ABOUT */}
        <div className="footer-col">
          <h4>Hornbill Farmhouse</h4>
          <p>
            Experience a peaceful farmhouse stay surrounded by nature, comfort,
            and warm hospitality in Gokarna.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="Instagram">i</a>
            <a href="#" aria-label="YouTube">y</a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p style={{fontWeight:"600"}}>📍 Hissa 221 Road, Rudrapada Temple Rd, Bhavikodla, Gokarna, Karnataka 581326</p>
          <p>📞 +91 7795121202</p>
          <p>✉️ achavenagara4@gmail.com</p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Get exclusive offers and updates directly in your inbox.</p>

          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Hornbill Farmhouse. All Rights Reserved</p>
        <span>Currency: INR</span>
      </div>
    </footer>
  )
}
