"use client"

import Description from "app/components/home/Description/Description";
import Hero from "app/components/home/Hero/Hero";
import MainProducts from "app/components/home/MainProducts/MainProducts";

export default function Home() {

  return (
    <main>

      <h1>
          <Hero />
          <Description />
          <MainProducts />
      </h1>
    </main>
  );
}

