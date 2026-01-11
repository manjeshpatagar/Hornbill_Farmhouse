import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeroSlider from "../components/HeroSlider"
import Rooms from "../components/Rooms"
import Facilities from "../components/Facilities"
import OfferSection from "../components/OfferSection"
import LatestNews from "../components/LatestNews"
import BookingCTA from "../components/BookingCTA"
import PhotoGallery from "../components/PhotoGallery"

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Hornbill Farmhouse"
        description="Peaceful farmhouse stay surrounded by nature"
      />

      <section id="home">
        <HeroSlider />
      </section>

      <section id="rooms">
        <Rooms />
      </section>

      <section id="facilities">
        <Facilities />
      </section>

      <section id="offer">
        <OfferSection />
      </section>

      <section id="news">
        <LatestNews />
      </section>

      <section id="gallery">
        <PhotoGallery />
      </section>

      <section id="booking">
        <BookingCTA />
      </section>
    </Layout>
  )
}
