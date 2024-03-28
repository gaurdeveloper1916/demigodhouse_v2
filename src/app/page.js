import Head from "next/head";
import Events from "./component/events/Events";
import Slider from "./component/slider/Slider";
import Map from "./component/googlemap/map";
import Sliderr from "./component/category/Slider";
import Explore from "./component/explore/Explore";
import Domesticevets from "./component/domesticevents/Domesticevets";
import Membership from "./component/membership/Membership";
import Curveslider from "./component/curveslider/Curveslider";
import Globalevents from "./component/globalevents/Globalevents";

export default function Home() {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  
  return (
    <main 
    className="bg-dark-black" 
    >
      <Slider/>
     {/* <Events/> */}
     <Map/>
     <Explore/>
     <Membership/>
     <Curveslider/>
<Globalevents/>
      {/* <Domesticevets/> */}
     {/* <Sliderr/> */}
    </main>
  );
}
