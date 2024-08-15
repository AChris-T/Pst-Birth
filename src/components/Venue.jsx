import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import ven from "../assets/ven.png"

const Venue = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
    <img src={ven} alt=""/>
    <h3 className="text-[30px] mt-4">Venue & Date </h3>
<div className="flex flex-col items-center justify-center w-full">
<div className="flex flex-wrap items-center gap-10 px-5 mt-10 mb-10 lg:justify-center md:justify-start ">
    <div className="flex flex-col ">
    <h3 className="text-[#fe3e01] font-extrabold"> Praise Ablaze Night</h3>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
        <CiCalendar className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold"> 11th October, 2024</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <MdAccessTime className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold">6pm (Please be prompt)</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <CiLocationOn className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold">RCCG Chapel of Restoration <br/> 1001 Morris Avenue, Bronx<br/> NY 10456</h3>
        </div>
        </div>
    </div>
    <div className="flex flex-col gap-3">
       <h3 className="text-[#fe3e01] font-extrabold"> Party Celebration</h3>
       <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
        <CiCalendar className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold"> 12th October, 2024</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <MdAccessTime className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold">10am - 3pm (No Africa time)</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <CiLocationOn className="w-[20px] h-10 text-[#fe3e01]" />
        <h3 className="text-[15px] text-gray-500 font-bold">Marina Delrey  1 Marina Dr,Bronx,<br/> NY 10465</h3>
        </div>
        </div>


    </div>
    <div className="flex flex-col gap-3 ">
    <h3 className="text-[#fe3e01] font-extrabold"> Thanksgiving Service</h3>
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
        <CiCalendar className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold"> 13th October, 2024</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px]">
        <MdAccessTime className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold">10 a.m (Please be prompt)</h3>
        </div>
        <div className="flex  items-center gap-2 mt-[-10px] ">
        <CiLocationOn className="w-[20px] h-10 text-[#fe3e01] " />
        <h3 className="text-[15px] text-gray-500 font-bold">RCCG Chapel of Restoration <br/> 1001 Morris Avenue, Bronx<br/> NY 10456</h3>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Venue
