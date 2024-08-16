import emailjs from '@emailjs/browser';
import { useEffect } from 'react';


const Success = () => {
    useEffect(() => {
      const email = sessionStorage.getItem('userEmail') || "taiwoakinfenwa2019@gmail.com"
      if (email) {
        sendThankYouEmail(email,"customer")
      }
      }, []);
      const sendThankYouEmail = (userEmail,userName) =>{
        const templateParams ={
          to_name:userName,
          to_email:userEmail
        }
        emailjs.send('service_j5olt3m','template_opodawg',templateParams,"yuDfESZ5PBp1Dykz2xbrk")
          .then((response)=>{
            console.log('SUCCESS!', response.status,response.text);
          },(error)=>{
            console.error("FAILED....",error);
          });
      }
  return (
    <div>
       <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. A thank-you email has been sent to your inbox.</p>

    </div>
  )
}

export default Success
