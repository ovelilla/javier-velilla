"use client";

// Components
import { useEffect, useState } from "react";
import { Hero } from "./components/hero";
import { Insight } from "./components/insight";
import { Carousel } from "./components/carousel";
import { Contact } from "./components/contact";

const Home = () => {
  const [containerRendered, setContainerRendered] = useState(false);

  useEffect(() => {
    setContainerRendered(true);
  }, []);

  return (
    containerRendered && (
      <>
        <Hero />
        <Insight />
        <Carousel />
        <Contact />
      </>
    )
  );
};

export default Home;
