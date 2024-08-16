
const Timer = () => {
  return (
    <div className="flex gap-3 justify-center -mt-11 bg-white md:mx-[10%] lg:mx-[30%] h-32 rounded-full">
        <div className="flex gap-2 md:gap-10 justify-center items-center text-white bg-[#de603a] w-[90%] mt-3 h-28 rounded-full">
        <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center">
                <h3>Days</h3>
                <h3>00</h3>
            </div>
            <div className="bg-white w-[1px] h-14"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
         <div className="flex flex-col items-center justify-center">      
                <h3>Hrs</h3>
                <h3>00</h3>
            </div>
            <div className="bg-white w-[1px] h-14"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
         <div className="flex flex-col items-center justify-center">      
                <h3>Mins</h3>
                <h3>00</h3>
            </div>
            <div className="bg-white w-[1px] h-14"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
         <div className="flex flex-col items-center justify-center">      
                <h3>Secs</h3>
                <h3>00</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Timer
