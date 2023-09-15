import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexstart gap-10">
        <Link href="/">
          <Image src="/ReadifyWorm.svg" width={115} height={43} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
