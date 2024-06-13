import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import { SERVICES } from "../../utilities/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/Card";
import Link from "next/link";
import { Badge } from "../../components/ui/Badge";

const Services = () => {
  return (
    <section className="our-services">
      <div className="dot-vecttor"></div>
      <div className="container home-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <div className="services_sec">
            {SERVICES.map((item, idx) => (
              <Link href={item.cta} key={idx}>
                <Card variant="gradient_violet">
                  <CardHeader>
                    <Badge shape="circle">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        height={20}
                        width={20}
                      />
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <h2>{item.title}</h2>
                  </CardContent>
                  <CardFooter>
                    <p>{item.para}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </Swiper>
        {/* <SwiperSlide key={idx}>
              <div
                className="our-services-card bg-lightpurple bg-outer rounded-4"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="bg-inner px-3 py-2 rounded-4 bg-whitepurple">
                  <div className="d-flex align-items-center">
                    <Image
                      src={item.icon}
                      width={57}
                      height={57}
                      alt="services-icon"
                    />
                    <h3 className="text-uppercase ms-3 fw-bold">
                      {item.title}
                    </h3>
                  </div>
                  <div className="card-content">
                    <p className="text-capitalize ">{item.para}</p>
                  </div>
                  <div className="card-button mt-4 mb-1">
                    <a
                      className="services-btn"
                      href={item.cta}
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
      </div>
    </section>
  );
};

export default Services;
