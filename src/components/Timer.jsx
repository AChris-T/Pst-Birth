import { useEffect, useState } from "react";

const Timer = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('October 12, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);
        
  return (
    <div className="flex gap-3 justify-center -mt-11 bg-white md:mx-[10%] lg:mx-[30%] h-32 rounded-full">
        <div className="flex gap-2 md:gap-10 justify-center items-center text-white bg-[#de603a] w-[90%] mt-3 h-28 rounded-full">
        <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center">
                <h3>Days</h3>
                <h3>{timeLeft.days || 0}</h3>
            </div>
            <div className="bg-white w-[1px] h-14"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
         <div className="flex flex-col items-center justify-center">      
                <h3>Hrs</h3>
                <h3>{timeLeft.hours || 0}</h3>
            </div>
            <div className="bg-white w-[1px] h-14"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
         <div className="flex flex-col items-center justify-center">      
                <h3>Mins</h3>
                <h3>{timeLeft.minutes || 0}</h3>
            </div>
            <div className="bg-white w-[1px] h-14"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
         <div className="flex flex-col items-center justify-center">      
                <h3>Secs</h3>
                <h3>{timeLeft.seconds || 0}</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Timer
