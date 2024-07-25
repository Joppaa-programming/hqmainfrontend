import Link from "next/link";

export default function Hero() {
const orderlink = "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781"
    const smtext = "Please let us know if you have any food allergies or special dietary needs."
    return (
      <div className="h-96 relative  bg-cover bg-origin-border flex flex-col justify-center items-center w-screen bg-hero2" >
            {/* <Image
      src="/banner.jpg"
      fill="true"
      objectFit='cover'
      alt="Picture of the author"
    /> */}
       <h1 className="uppercase font-semibold text-2xl mb-[40px]"> home of 
       nigerian  CUISINES</h1>
       <Link href={orderlink} target="_blank" className="bg-white text-black py-2 px-4 uppercase">
       Order online
       </Link>
       <p className=" text-xs p-2  absolute bottom-3"> {smtext}</p>
      </div>
    );
  }