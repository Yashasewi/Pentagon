import Link from "next/link";
import Image from "next/image";

import hero from "/public/Images/Hero.png";

function Hero() {
  return (
    <div className="hero">
      <nav className="nav_section">
        <div className="logo">PENTAGON</div>
        <ul className="nav_buttons">
          <Link href={"/"}>
            <li>HOME</li>
          </Link>
          <Link href={"/"}>
            <li>COLLECTION</li>
          </Link>
          <Link href={"/"}>
            <li>TRENDS</li>
          </Link>
          <Link href={"/"}>
            <li>ABOUT US</li>
          </Link>
          <Link href={"/"}>
            <li>CONTACT US</li>
          </Link>
        </ul>
        <button className="btn login_btn">LOGIN</button>
        {/* <div className="buttons">
                    <button className="btn">SIGN UP</button>
                </div> */}
      </nav>

      <div className="hero_content">
        <div className="hero_text">
          <h1 className="main_text">Find the Best Fashion Style for You</h1>
          <p className="secondary_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros, eget tincidunt ipsum eleifend ut.
          </p>
          <button className="btn shop_now_btn">SHOP NOW</button>
        </div>
        <div className="hero_image">
          <Image src={hero} alt="hero_image" width={500} height={540} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
