import Head from "next/head";
import Events from "./component/events/Events";
import Slider from "./component/slider/Slider";
import Map from "./component/googlemap/map";
import Sliderr from "./component/category/Slider";

export default function Home() {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  
  return (
    <main >
      <Slider/>
     {/* <Events/> */}
     
     <Map/>
     <Sliderr/>
    </main>
  );
}
