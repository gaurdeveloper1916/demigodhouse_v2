'use client'

import React from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./EventMapLeaflet"), {
    ssr: false
  });

  return (
    <main id="map" style={{ width: '100%', height: '400px' }}>
        {/* <p className="fs-4 text-center text-shadow-effect mt-4">Visualize events geographically on a map.</p> */}
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>
  );
}