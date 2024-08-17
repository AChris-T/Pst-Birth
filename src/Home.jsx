import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ImageView from './components/ImageView'
import Navbar from './components/Navbar'
import { loadStripe } from "@stripe/stripe-js";
import Venue from './components/Venue'

const stripePromise = loadStripe("pk_test_51PoJVYFkL91BNl4zZFi96d1in5rwe4sV8S5zKGt1O34OF2z2CBYWNkhEs94hK65sGE2tiwvHHXCXTSRNp6Li36hw00h0aVL3mJ");

const Home = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1PoJXmFkL91BNl4z2ftFIYxs',
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: `${window.location.origin}/success?session-id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  };
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Navbar/>
      <HeroSection handleCheckout={handleCheckout}/>
      <Venue handleCheckout={handleCheckout}/>
      <ImageView/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
