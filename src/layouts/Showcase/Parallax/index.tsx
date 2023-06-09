import { useEffect, useState } from "react";
import { ParallaxContainer } from "./styled";

export function Parallax() {
  const [isLoaded, setIsLoaded] = useState(false);
  let waitBeforeShow = 700;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, waitBeforeShow);

    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(document.querySelector('#parallax-bg-3'))
    }, 1500);

    return () => clearTimeout(timer);
  }, [])



  return (
    isLoaded ? <ParallaxContainer className="parallax" >
      <div id="parallax-bg-3" className="parallax-bg" >
        <div id="bg-3-1" data-aos="fade-up" data-aos-duration="5000" className="w-6/10"></div>
        <div id="bg-3-2" data-aos="fade-up" data-aos-duration="3000" className="w-2/10"></div>
        <div id="bg-3-3" data-aos="fade-up" data-aos-duration="1000" className="w-8/10"></div>
        <div id="bg-3-4"></div>
      </div>
    </ParallaxContainer> : <div></div>
  )
}