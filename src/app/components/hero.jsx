import Link from "next/link";
import Imagetext from "./imagewithtext";

export default function Hero() {
  const orderlink = "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781"
  const smtext = "Please let us know if you have any food allergies or special dietary needs."
  return (
    <div className="h-[600px] relative  bg-cover bg-origin-border flex flex-col justify-center items-center w-screen bg-hero2" >
      <Imagetext imgSrc={'/hero2.png'} />
      <div className='absolute flex flex-col justify-center items-center'>
        <div className="pb-2 text-center"><h1 className="  font-bold text-5xl md:text-6xl  "> Home of
          nigerian <br></br>  cuisine</h1>
          <p className="p-3 text-lg">in Manchester </p></div>
        <Link href={orderlink} target="_blank" className="bg-white text-black text-xl py-2 px-4 uppercase">
          Order online
        </Link>
      </div>
      <p className=" text-xs px-5  absolute bottom-4"> {smtext}</p>
    </div>
  );
}