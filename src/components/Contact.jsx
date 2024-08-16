import  { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='flex justify-center items-center flex-col gap-1 w-[100%]'>
      <div className='flex gap-3 flex-col lg:flex-row w-[100%] justify-center items-center'>
        <div data-aos="fade-right"  data-aos-duration="3000" className='nani gap-3 text-white font-bold flex-col w-[90%] lg:w-[500px] h-[300px] flex justify-center items-center'>
            <h3 className='text-[30px] text-center'>For Details on Aso Ebi</h3>
            <h3 className='flex text-center'>Contact Sis Jessica E.Ohwevwo @ 3473018796</h3>
            <button className='rounded-full border-[1px] px-5 py-2 hover:bg-[#de603a] hover:text-[white]'>Contact Us</button>
        </div>
        <div data-aos="fade-left"  data-aos-duration="3000" className=' nan gap-3 text-white font-bold flex-col w-[90%] lg:w-[500px] h-[300px] flex justify-center items-center'>
        <h3 className='text-[30px]'>RSVP For Seat</h3>
            <h3>Pastor Yetty +1(646) 314-1169</h3>
            <h3>Pastor Sola +1(347) 940-2752</h3>
            <button className='rounded-full border-[1px] px-5 py-2 hover:bg-[#de603a] hover:text-[white]'>RSVP Now</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
