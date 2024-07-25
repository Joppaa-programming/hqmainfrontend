import Image from "next/image";
import Hero from "./components/hero";
import Pdfviewer from "./components/pdf";
import Grid from "./components/grid";
import CardsList from "./components/cardslist";

export default function Home() {
  return (
    <>
    <Hero />
   <CardsList/>
    <Pdfviewer />
    </>
  );
}
