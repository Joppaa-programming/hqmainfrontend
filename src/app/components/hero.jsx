import Link from "next/link";
import Imagetext from "./imagewithtext";
import ImageCarousel from "./imageCarousel";

export default function Hero() {

  const images = 
     [ 
        //{ image: "/Food poster.png"},
        {image: "/hero.webp"},
       { image: "/hero2.png"},
       { image: "/fish.webp"},
    ]

  const orderlink = "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781"
  const smtext = "Please let us know if you have any food allergies or special dietary needs."
  return (
    <div className="h-screen relative  bg-cover bg-origin-border drop-shadow-xl shadow-lg flex flex-col justify-center items-center w-screen " >
      {/* <Imagetext imgSrc={'/hero.webp'} /> */}
      <ImageCarousel data={images}/>
      <div className='absolute text-white flex flex-col justify-center items-center'>
        <div className="pb-2  text-center"><h1 className="drop-shadow-md  font-bold text-5xl md:text-6xl  "> Home of
          Nigerian <br></br>  Cuisine</h1>
          <p className="p-3 drop-shadow-md font-medium text-lg">in Manchester </p></div>
        <Link href={orderlink} target="_blank" className="bg-white text-black text-xl hover:text-red-500 py-2 px-4 rounded-sm ">
          Order online
        </Link>
      </div>
      <p className=" text-xs px-5 font-bold shadow-sm absolute bottom-4 text-black"> {smtext}</p>
    </div>
  );
}