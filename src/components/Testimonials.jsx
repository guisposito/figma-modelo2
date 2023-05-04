import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/testimonials.json";
import HeadingSection from "./utils/HeadingSection";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="bg-section-testimonials bg-center bg-cover text-white font-inter h-[504px]">
        <HeadingSection title="Testimonials" />
        <div className=" container mx-auto w-[735px]">
          <Slider {...settings}>
            {Data.map((testimonial) => (
              <div
                className="flex items-center justify-center mb-12"
                key={testimonial.id}
              >
                <p className="mb-6 text-center">{testimonial.testimonial}</p>
                <h3 className="text-center font-semibold">{testimonial.author}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
