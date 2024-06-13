import Image from "next/image";

export const ImageCard = ({
  src = "/assets/images/course-img.svg",
  alt,
  width,
  height,
  date,
}) => {
  return (
    <div className='img-card'>
      <div>23 Jan 2024</div>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
