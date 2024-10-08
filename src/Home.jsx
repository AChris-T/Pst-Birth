import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ImageView from './components/ImageView'
import Navbar from './components/Navbar'
import Venue from './components/Venue'


const Home = () => {
  
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Navbar/>
      <HeroSection />
      <Venue />
      <ImageView/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
