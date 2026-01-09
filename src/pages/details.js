import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const DetailsPage = () => (
  <Layout>
    <SEO 
      title="Resort Details | Royal Resort"
      description="Rooms, facilities and pricing details."
    />

    <h2>Resort Details</h2>
    <ul>
      <li>Deluxe Rooms</li>
      <li>Free Wi-Fi</li>
      <li>Beach Access</li>
      <li>24×7 Support</li>
    </ul>
  </Layout>
)

export default DetailsPage
