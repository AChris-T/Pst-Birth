import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-12 mt-5 ">
    <img src={logo} alt="logo" className="w-28"/>
    <button style={{color:"rgb(2, 92, 99)", fontFamily:"Alice"}}>RSVP</button>
    </div>
  )
}

export default Navbar
