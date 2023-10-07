import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={'/post'}>
    <Image src={"/logo.svg"} alt="logo" width={50} height={50} />

    </Link>

  ) 
};

export default Logo;
