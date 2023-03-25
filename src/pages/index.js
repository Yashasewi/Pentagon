import { Inter } from "next/font/google";

import Hero from "@/Components/Hero/Hero";
import Collection from "@/Components/Collection/Collection";
import BestSeller from "@/Components/BestSeller/BestSeller";
import Review from "@/Components/Review/Review";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Collection />
            <BestSeller />
            <Review />
            <Footer />
        </>
    );
}
