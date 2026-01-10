import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeroSlider from "../components/HeroSlider"
import Rooms from "../components/Rooms"
import Facilities from "../components/Facilities"
import OfferSection from "../components/OfferSection"
import LatestNews from "../components/LatestNews"
import BookingCTA from "../components/BookingCTA"





export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Hornbill Farmhouse"
        description="Peaceful farmhouse stay surrounded by nature"
      />

      <HeroSlider />

      <Rooms />
      <Facilities />
      <OfferSection />
      <LatestNews />
      <BookingCTA />
    </Layout>
  )
}
