import ImageView from "./components/ImageView"
import HeroSection from "./components/slider2/HeroSection"
import Location from "./components/slider2/Location"
import Navbar from "./components/slider2/Navbar"
import Note from "./components/slider2/Note"
import Footer from "./components/Footer"

const NewHome = () => {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Navbar/>
      <HeroSection/>
      <ImageView/>
      <Location/>
      <Note/>
      <Footer/>
    </div>
  )
}

export default NewHome
