import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
// import Logo from "./../images/online-book-logo-icon.webp";
import Logo from "@/images/online-book-logo-icon.webp";

export default function Header() {
  return (
    <header>
      <h1>BOOKBLUS</h1>
      <Image src={Logo} alt="Logo" width={50} height={50} />
    </header>
  );
}
