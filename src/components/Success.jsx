const Success = () => {
 
  return (
    <div className="flex justify-center flex-col items-center h-[100vh] gap-6">
       <h1>Payment Successful!</h1>
      <p>Thank you for your Reservation. Check your mail inbox for Venue details.</p>
      <a href="/" className="bg-blue-300 text-white px-8 h-12 flex justify-center items-center rounded-full">Okay</a>

    </div>
  )
}

export default Success
