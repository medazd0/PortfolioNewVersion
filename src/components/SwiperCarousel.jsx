import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperCarousel() {
  const slides = ["/images/bac.png", "/images/imm.jpeg", "/images/slide3.jpg"];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        className="h-64 sm:h-80 md:h-[28rem]"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
