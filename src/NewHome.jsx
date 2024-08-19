import ImageView from "./components/ImageView"
import HeroSection from "./components/slider2/HeroSection"
import Location from "./components/slider2/Location"
import Navbar from "./components/slider2/Navbar"
import Note from "./components/slider2/Note"
import Footer from "./components/Footer"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51PoJVYFkL91BNl4zZFi96d1in5rwe4sV8S5zKGt1O34OF2z2CBYWNkhEs94hK65sGE2tiwvHHXCXTSRNp6Li36hw00h0aVL3mJ");


const NewHome = () => {
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
            successUrl: `${window.location.origin}/success?session-id={CHECKOUT_SESSION_I`,
            cancelUrl: `${window.location.origin}`,
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
      <Navbar handleCheckout={handleCheckout}/>
      <HeroSection/>
      <ImageView/>
      <Location handleCheckout={handleCheckout}/>
      <Note handleCheckout={handleCheckout}/>
      <Footer/>
    </div>
  )
}

export default NewHome
