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
import Booknow from "./component/booknow/Booknow";
import MultiMarquee from "./component/multimarquee/MultiMarquee";
import EventsCarousel from "./component/EventsCarousel/EventsCarousel";
import Flipcards from "./component/FlipCards/Flipcards";
import Testtube from "./component/testtube/Testtube";
import FridayNight from "./component/fridaynight/fridayNight";
import DesSlider from "./component/descSlider/DesSlider";
import VerticalSlider from "./component/verticalslider/VerticalSlider";
import Test from "./component/Test.js/Test";
import AnimatedImage from "./component/animatedImage/AnimatedImage";
import TwoImagesDiv from "./component/twoImagesDiv/TwoImagesDiv";

export default function Home() {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;

  return (
    <main className="bg-dark-black">
      <Slider />
      <Map />
      <Explore />
      <Membership />
      {/* <Curveslider /> */}
      {/* <Globalevents /> */}
      <Booknow />
      <Testtube/>
      <FridayNight/>
      <Test/>
      <TwoImagesDiv/>
      {/* <DesSlider/> */}
      {/* <AnimatedImage/> */}
      {/* <VerticalSlider/> */}
      {/* <MultiMarquee/> */}
      {/* <EventsCarousel/> */}
   

      {/* <Domesticevets/> */}
      {/* <Sliderr/> */}
    </main>
  );
}
