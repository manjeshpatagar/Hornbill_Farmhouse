import React from "react"
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top footer */}
      <div className="footer-top">
        {/* Follow Us */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <p>And keep up to date with Hornbill Farmhouse</p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">t</a>
            <a href="#">i</a>
            <a href="#">y</a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Kumta, Uttara Kannada, Karnataka</p>
          <p>📞 +91 97406 31908</p>
          <p>✉️ booking@hornbillfarmhouse.com</p>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Sign up to our newsletter for exclusive offers.</p>

          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer-bottom">
        <p>© 2026 Hornbill Farmhouse. All Rights Reserved</p>
        <span>Currency: INR</span>
      </div>
    </footer>
  )
}
