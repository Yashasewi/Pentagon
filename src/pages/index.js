import BestSeller from "@/Components/BestSeller/BestSeller";
import Collection from "@/Components/Collection/Collection";
import Faq from "@/Components/FAQ/Faq";
// import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import { Navbar } from "@/Components/Navbar/Navbar";
import Review from "@/Components/Review/Review";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <BestSeller />
      <Review />
      {/* <Footer /> */}
      <Faq />
    </>
  );
}
