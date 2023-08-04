import Banner from "@/components/Banner"
import InfoSection from "@/components/InfoSection"
import Announcements from "@/components/announcements/Announcements"
import Products from "@/components/products/Products"
import Services from "@/components/services/Services"
import Contact from "@/components/contact/Contact"
import Blogs from "@/components/blog/Blogs"

export default function Home() {
  return (
    <>
      <Banner />
      <InfoSection/>
      <Announcements />
      <Products />
      <Services />
      <Contact />
      <Blogs />
    </>
  )
}