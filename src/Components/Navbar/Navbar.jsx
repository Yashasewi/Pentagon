import React from "react";
import Link from "next/link";
export const Navbar = () => {
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="nav_section">
      <Link href={"/"}>
        <div className="logo">BEFIKRE</div>
      </Link>
      <ul className="nav_buttons">
        <Link href={"/"}>
          <li onClick={handleHomeClick}>HOME</li>
        </Link>
        <Link href={"/Collections"}>
          <li>COLLECTION</li>
        </Link>
        <Link href={"/AboutUs"}>
          <li>ABOUT US</li>
        </Link>
        <Link href={"/Contact"}>
          <li>CONTACT US</li>
        </Link>
      </ul>
      <div className="buttons">
        <button className="btn">SIGN UP</button>
        <Link href={"/Login"}>
          <button className="btn login_btn">LOGIN</button>
        </Link>
      </div>
    </nav>
  );
};
