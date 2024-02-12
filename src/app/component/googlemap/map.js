'use client'

import React from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./EventMapLeaflet"), {
    ssr: false
  });

  return (
    <main id="eventOnMap">
        <p className="fs-4 text-center text-shadow-effect">Visualize events geographically on a map.</p>
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>
  );
}