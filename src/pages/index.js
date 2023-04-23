import BestSeller from "@/Components/BestSeller/BestSeller";
import Collection from "@/Components/Collection/Collection";
// import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Review from "@/Components/Review/Review";

export default function Home() {
    return (
        <>
            <Hero />
            <Collection />
            <BestSeller />
            <Review />
            {/* <Footer /> */}
        </>
    );
}
