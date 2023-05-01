import "@/styles/globals.css";
import "../Components/BestSeller/BestSeller.css";
import "../Components/Collection/Collection.css";
import "../Components/Discount/Discount.css";
import "../Components/Footer/Footer.css";
import "../Components/Hero/Hero.css";
import "../Components/Review/Review.css";
import "../Components/Navbar/Navbar.css";

import Footer from "@/Components/Footer/Footer";
import {Navbar} from "@/Components/Navbar/Navbar";
import Head from "next/head";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Befikre</title>
        <meta name="description" content="Befikre" />
        <link rel="icon" href="/Pentagon.png?ao_noptimize=1" />
      </Head>
      <Navbar />
      <Component {
    ...pageProps} />
      <Footer />
    </>
  );
}
