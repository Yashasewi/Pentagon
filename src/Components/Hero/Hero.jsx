import Image from "next/image";

import hero from "/public/Images/hero.jpg";

function Hero() {
  return (
    <div className="hero">
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
