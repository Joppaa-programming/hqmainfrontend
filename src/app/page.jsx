import Image from "next/image";
import Hero from "./components/hero";
import Pdfviewerr from "./components/pdf";
import Grid from "./components/grid";
import CardsList from "./components/cardslist";
import VideoPlayer from "./components/videoPlayer";
import MapElemt from "./components/map";

export default function Home() {
  return (
    <>
    <Hero />
   <CardsList />
    <VideoPlayer/>
    <Pdfviewerr />
    < MapElemt/>
    </>
  );
}
