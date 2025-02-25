// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import slide_2_img from "/src/assets/banner1.webp";
import slide_3_img from "/src/assets/banner2.png";
import slide_1_img from "/src/assets/banner3.webp";

export function CarouselWithContent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_1_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3_img} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
