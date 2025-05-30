import { Button } from "@material-tailwind/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const heroSlides = [
  {
    id: 1,
    title: "Premium Tennis Collection",
    subtitle: "Professional grade equipment for every player",
    ctaText: "Shop Tennis",
    bgImage:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "center",
  },
  {
    id: 2,
    title: "Run Further, Run Faster",
    subtitle: "Revolutionary running shoes with advanced cushioning",
    ctaText: "Explore Running Gear",
    bgImage:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "right",
  },
  {
    id: 3,
    title: "Golf Season is Here",
    subtitle: "Upgrade your golf set with our premium selection",
    ctaText: "View Golf Equipment",
    bgImage:
      "https://images.unsplash.com/photo-1532508583690-538a1436f423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZiUyMGNsdWJ8ZW58MHx8MHx8fDA%3D",
    position: "left",
  },
  {
    id: 4,
    title: "Train Like a Champion",
    subtitle: "High-performance fitness equipment for home and gym",
    ctaText: "Discover Fitness",
    bgImage:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    position: "center",
  },
];

const CarouselWithContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen max-h-[800px] bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              <div
                className={`absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 ${
                  slide.position === "center"
                    ? "items-center text-center"
                    : slide.position === "right"
                    ? "items-end text-right"
                    : "items-start text-left"
                }`}
              >
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 opacity-0 translate-y-8 animate-fadeIn">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white mb-8 transition-all duration-700 delay-200 opacity-0 translate-y-8 animate-fadeIn">
                    {slide.subtitle}
                  </p>
                  <Button color="white" className="rounded-full animate-fadeIn">
                    {slide.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots with active state */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-blue-500"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWithContent;
