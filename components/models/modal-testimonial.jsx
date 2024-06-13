import Slider from "react-slick";
import { TestimonialCard } from "../testimonial/testimonial-card";

export const ModalTestimonial = ({ settings, testimonials }) => {
  return (
    <div className="slider-testimonial">
      <Slider {...settings}>
        {testimonials?.map((item, idx) => (
          <TestimonialCard key={idx} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const testimonials = await getTestimonial();

    return { props: { testimonials } };
  } catch (error) {
    console.log(error);
    return
  }
}
