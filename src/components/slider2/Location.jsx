import { CiCalendar, CiLocationOn } from "react-icons/ci"
import { MdAccessTime } from "react-icons/md"

const Location = ({handleCheckout}) => {
  return (
    <div className="nan-effect flex justify-center flex-col items-center">
    <h3 style={{color:"rgb(255, 255, 255)", fontFamily:"Rye"}} className="text-[43px] flex text-center">💫 Join the celebration on 💫</h3>
    <div className="flex justify-between flex-col">
    <div className="flex flex-col items-center justify-center w-full">
<div style={{color:"rgb(255, 255, 255)", fontFamily:"Rye"}} className="flex flex-wrap   w-full gap-10  mt-10 mb-10 lg:justify-center md:justify-start ">
    <div className="flex flex-col ">
    <h3 className=" font-extrabold"> Praise Ablaze Night</h3>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
        <CiCalendar className="w-[20px] h-10 "/>
        <h3 className="text-[15px]  font-bold"> 11th October, 2024</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <MdAccessTime className="w-[20px] h-10 " />
        <h3 className="text-[15px]  font-bold">6pm (Please be prompt)</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <CiLocationOn className="w-[20px] h-10 " />
        <h3 className="text-[15px]  font-bold">RCCG Chapel of Restoration <br/> 1001 Morris Avenue, Bronx<br/> NY 10456</h3>
        </div>
        </div>
    </div>
    <div className="flex flex-col gap-3">
       <h3 className=" font-extrabold"> Party Celebration</h3>
       <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
        <CiCalendar className="w-[20px] h-10  " />
        <h3 className="text-[15px]  font-bold"> 12th October, 2024</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <MdAccessTime className="w-[20px] h-10 " />
        <h3 className="text-[15px]  font-bold">10am - 3pm (No Africa time)</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <CiLocationOn className="w-[20px] h-10 " />
        <button  onClick={handleCheckout} className="text-[15px]  font-bold">Click the Link me to recieve Location details</button>
        </div>
        </div>


    </div>
    <div className="flex flex-col gap-3 ">
    <h3 className=" font-extrabold"> Thanksgiving Service</h3>
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
        <CiCalendar className="w-[20px] h-10  " />
        <h3 className="text-[15px]  font-bold"> 13th October, 2024</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <MdAccessTime className="w-[20px] h-10  " />
        <h3 className="text-[15px]  font-bold">10 a.m (Please be prompt)</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px] ">
        <CiLocationOn className="w-[20px] h-10  " />
        <h3 className="text-[15px]  font-bold">RCCG Chapel of Restoration <br/> 1001 Morris Avenue, Bronx<br/> NY 10456</h3>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Location
