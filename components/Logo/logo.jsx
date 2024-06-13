import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({
  src = "/Brand-Logo.svg",
  alt = "header-logo",
  width = 180,
  height = 35,
}) => {
  return (
    <Link href="/">
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default Logo;
