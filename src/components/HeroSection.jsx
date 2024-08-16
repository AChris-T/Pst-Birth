import { useEffect } from "react";
import cel from "../assets/item1.png"
import item from "../assets/item2.png"
import sweet from "../assets/sweet.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timer from "./Timer";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51PoJVYFkL91BNl4zZFi96d1in5rwe4sV8S5zKGt1O34OF2z2CBYWNkhEs94hK65sGE2tiwvHHXCXTSRNp6Li36hw00h0aVL3mJ");


const HeroSection = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      const handleCheckout = async () => {
        const stripe = await stripePromise;
    
        try {
          const { error } = await stripe.redirectToCheckout({
            lineItems: [
              {
                price: 'price_1PoJXmFkL91BNl4z2ftFIYxs', // Replace with your actual Price ID
                quantity: 1,
              },
            ],
            mode: 'payment',
            successUrl: `${window.location.origin}/success`,
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
    <>
    <div className="hero flex justify-around items-center text-white gap-2">
    <div className="hidden md:block"  data-aos="fade-right" data-aos-delay="900"  data-aos-duration="3000">
    <img src={cel} alt="cel"/>
    </div>
    <div className="flex items-center flex-col gap-2">
    <img  data-aos="fade-right"  data-aos-duration="3000" src={sweet} alt="cel"/>
    <h3  data-aos="fade-left"  data-aos-duration="3000" className="text-[30px] text-center md:text-[40px] font-bold"> Celebrating the Life of Pastor Daniel Adeniran</h3>
        <h4  data-aos="fade-right"  data-aos-duration="3000" className=" text-[20px] text-center md:text-[30px] font-semibold">Join us in honoring 60 years of God's faithfulness</h4>
        <a  data-aos="fade-in" onClick={handleCheckout}  data-aos-duration="3000" className="bg-[#de603a] w-36 h-12 flex justify-center items-center rounded cursor-pointer mt-4">RSVP Now</a>
    </div>
    <div  className="hidden md:block" data-aos="fade-left" data-aos-delay="900"  data-aos-duration="3000">
    <img src={item} alt="cel"/>
    </div>
    <div className="absolute flex ">
    </div>
    </div>
    <div>
        <Timer/>
    </div>
    </>
  )
}

export default HeroSection
