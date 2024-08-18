
const Note = () => {
  return (
    <div style={{background:"rgb(255, 241, 251)", fontFamily:"Rye"}} className="flex justify-center items-center py-10 flex-col gap-8">
      <h3 style={{color:"rgb(2, 92, 99)", fontFamily:"Rye"}} className="text-[32.8px] text-center">Take notes before the celebration</h3>
      <div className="flex flex-col md:flex-row gap-16">
        <div>
            <h3 style={{color:"rgb(74, 181, 204)", fontFamily:"Rye"}} className="text-[20.4px]">Dress Code</h3>
            <p style={{color:"rgb(66, 84, 117)", fontFamily:"Alice"}} className="text-[18.4px]">Turquoise and Silver-Ladies </p>
            <p style={{color:"rgb(66, 84, 117)", fontFamily:"Alice"}} className="text-[18.4px]">White and Turquoise Cap-Men </p>
        </div>
        <div>
            <h3 style={{color:"rgb(74, 181, 204)", fontFamily:"Rye"}} className="text-[20.4px]">RSVP For a seat</h3>
            <p style={{color:"rgb(66, 84, 117)", fontFamily:"Alice"}} className="text-[18.4px]">Pastor Yetty +1 (646) 314-1169</p>
            <p style={{color:"rgb(66, 84, 117)", fontFamily:"Alice"}} className="text-[18.4px]">Pastor Sola +1(347) 940-2752 </p>
        </div>
        <div>
            <h3 style={{color:"rgb(74, 181, 204)", fontFamily:"Rye"}} className="text-[20.4px]">Details on Aso Ebi</h3>
            <p style={{color:"rgb(66, 84, 117)", fontFamily:"Alice"}} className="text-[18.4px]">Sis Jessica E.Ohwevwo @347 301 8796 </p>
        </div>
      </div>
      <div className="bg-white px-12 py-12 rounded-md flex flex-col justify-center items-center gap-8">
        <h3 style={{color:"rgb(2, 92, 99)", fontFamily:"Rye"}} className="text-[32.8px] ">Reserve your place</h3>
        <p style={{color:"rgb(2, 92, 99)", fontFamily:"Alice"}} className="w-[400px] text-center text-[18.4px]">We are thrilled to invite you to join us in celebrating the incredible birthday</p>
        <button style={{backgroundImage: "linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(74, 181, 204) 96%)"}} className="py-3 w-32 text-[18.4px] text-white rounded-full">RSVP</button>
      </div>
    </div>
  )
}

export default Note
