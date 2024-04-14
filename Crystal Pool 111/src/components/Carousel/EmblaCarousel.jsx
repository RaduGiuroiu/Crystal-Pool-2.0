import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AboutImage from "../../assets/about/about_img.jpg";
import AboutImage2 from "../../assets/Carousel/piscina3.jpg";
import AboutImage3 from "../../assets/Carousel/piscina4.jpg";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={AboutImage} alt="" />
        </div>
        <div className="embla__slide">
          <img src={AboutImage2} alt="" />
        </div>
        <div className="embla__slide">
          <img src={AboutImage3} alt="" />
        </div>
      </div>
    </div>
  );
}
