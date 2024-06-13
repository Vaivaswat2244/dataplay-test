import Image from "next/image";
import React from "react";

export default function RoadMap() {
  return (
    <section className="our-roadmap">
      <div className="container">
        <h3>Our Roadmap</h3>
        <div className="our-roadmap-img">
          <Image
            src="/our-roadmap.svg"
            width={822}
            height={639}
            alt="roadmap-img"
          />
        </div>
      </div>
    </section>
  );
}
