 
import BallBoard from "./BallBoard"; 

export function MicroWork() {
  return (
    <div className="  bg_mountain relative">
      <div className=" flex justify-between max-w-[1100px] mx-auto">
        <p className="text-[#e4bf65] text-xs">AI-Powered</p>
        <p className="text-[#e4bf65] text-xs">All-In-One Tool</p>
        <p className="text-[#e4bf65] text-xs">Automatically</p>
        <p className="text-[#e4bf65] text-xs">Organizes Itself</p>
      </div>
      <h1 className="text-center md:text-[118px] text-5xl max-w-[1180px] font-500 mx-auto text-white leading-none pt-5 z-50">Micro works the way you want to work</h1>
      <BallBoard/>
    </div>
  );
}
 