'use client'
import React, { useRef } from "react";
import { useEffect } from "react";
import SwiperComponent from "./Swipercomponent/Swiper";
import SwiperButtons from "./SwiperButtons";
const AnotherSwiperWithButtonsComponent = () => {
    const data = [
        {
            "id": "15",
            "author": "Paul Jarvis",
            "width": 2500,
            "height": 1667,
            "url": "https://unsplash.com/photos/NYDo21ssGao",
            "download_url": "https://picsum.photos/id/15/2500/1667"
        },
        {
            "id": "16",
            "author": "Paul Jarvis",
            "width": 2500,
            "height": 1667,
            "url": "https://unsplash.com/photos/gkT4FfgHO5o",
            "download_url": "https://picsum.photos/id/16/2500/1667"
        },
        {
            "id": "17",
            "author": "Paul Jarvis",
            "width": 2500,
            "height": 1667,
            "url": "https://unsplash.com/photos/Ven2CV8IJ5A",
            "download_url": "https://picsum.photos/id/17/2500/1667"
        },
        {
            "id": "18",
            "author": "Paul Jarvis",
            "width": 2500,
            "height": 1667,
            "url": "https://unsplash.com/photos/Ps2n0rShqaM",
            "download_url": "https://picsum.photos/id/18/2500/1667"
        },
        {
            "id": "19",
            "author": "Paul Jarvis",
            "width": 2500,
            "height": 1667,
            "url": "https://unsplash.com/photos/P7Lh0usGcuk",
            "download_url": "https://picsum.photos/id/19/2500/1667"
        },
        {
            "id": "20",
            "author": "Aleks Dorohovich",
            "width": 3670,
            "height": 2462,
            "url": "https://unsplash.com/photos/nJdwUHmaY8A",
            "download_url": "https://picsum.photos/id/20/3670/2462"
        },
        {
            "id": "21",
            "author": "Alejandro Escamilla",
            "width": 3008,
            "height": 2008,
            "url": "https://unsplash.com/photos/jVb0mSn0LbE",
            "download_url": "https://picsum.photos/id/21/3008/2008"
        },
        {
            "id": "22",
            "author": "Alejandro Escamilla",
            "width": 4434,
            "height": 3729,
            "url": "https://unsplash.com/photos/du_OrQAA4r0",
            "download_url": "https://picsum.photos/id/22/4434/3729"
        },
        {
            "id": "23",
            "author": "Alejandro Escamilla",
            "width": 3887,
            "height": 4899,
            "url": "https://unsplash.com/photos/8yqds_91OLw",
            "download_url": "https://picsum.photos/id/23/3887/4899"
        },
        {
            "id": "24",
            "author": "Alejandro Escamilla",
            "width": 4855,
            "height": 1803,
            "url": "https://unsplash.com/photos/cZhUxIQjILg",
            "download_url": "https://picsum.photos/id/24/4855/1803"
        },
        {
            "id": "25",
            "author": "Alejandro Escamilla",
            "width": 5000,
            "height": 3333,
            "url": "https://unsplash.com/photos/Iuq0EL4EINY",
            "download_url": "https://picsum.photos/id/25/5000/3333"
        },
        {
            "id": "26",
            "author": "Vadim Sherbakov",
            "width": 4209,
            "height": 2769,
            "url": "https://unsplash.com/photos/tCICLJ5ktBE",
            "download_url": "https://picsum.photos/id/26/4209/2769"
        },
        {
            "id": "27",
            "author": "Yoni Kaplan-Nadel",
            "width": 3264,
            "height": 1836,
            "url": "https://unsplash.com/photos/iJnZwLBOB1I",
            "download_url": "https://picsum.photos/id/27/3264/1836"
        },
        {
            "id": "28",
            "author": "Jerry Adney",
            "width": 4928,
            "height": 3264,
            "url": "https://unsplash.com/photos/_WiFMBRT7Aw",
            "download_url": "https://picsum.photos/id/28/4928/3264"
        },
        {
            "id": "29",
            "author": "Go Wild",
            "width": 4000,
            "height": 2670,
            "url": "https://unsplash.com/photos/V0yAek6BgGk",
            "download_url": "https://picsum.photos/id/29/4000/2670"
        }
    ]
    const anotherSwiperElRef = useRef();
    const handleSwiperProgress = (prevButtonId, nextButtonId, swiperElRef) => {
        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);
      
        swiperElRef.current.addEventListener('progress', (e) => {
          const [swiper, progress] = e.detail;
      
          if (prevButton) {
            prevButton.disabled = progress === 0;
            prevButton.classList.toggle('disabled', progress === 0);
          }
      
          if (nextButton) {
            nextButton.disabled = progress === 1;
            nextButton.classList.toggle('disabled', progress === 1);
          }
        });
      };
    useEffect(() => {
      handleSwiperProgress("another-example-prev", "another-example-next", anotherSwiperElRef);
    }, [anotherSwiperElRef !== undefined]);
    
    return (
      <section>
        <h2 className="subtitle">Another Swiper with buttons component</h2>
        <SwiperComponent id={'mySwiperEl'} elRef={anotherSwiperElRef} slidesPerView={4.19} slidesPerGroup={4}
                           spaceBetween={24} speed={1500} images={data} />
        {/* Component with custom buttons */}
        <SwiperButtons
          prev={`another-example-prev`} 
          next={`another-example-next`} 
          swiperEl={anotherSwiperElRef}/> 
      </section>
    )
  }
  export default AnotherSwiperWithButtonsComponent;