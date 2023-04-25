import "@/styles/globals.css";
import "../Components/BestSeller/BestSeller.css";
import "../Components/Collection/Collection.css";
import "../Components/Discount/Discount.css";
import "../Components/Footer/Footer.css";
import "../Components/Hero/Hero.css";
import "../Components/Products/Products.css";
import "../Components/Review/Review.css";
import "./Product/ProductDetails/ProductDetail.css";
import "../Components/Navbar/Navbar.css";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Pentagon</title>
                <meta name="description" content="Pentagon" />
                <link rel="icon" href="/Pentagon.png?ao_noptimize=1" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
