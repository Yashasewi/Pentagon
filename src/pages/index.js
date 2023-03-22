import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/Components/Hero/Hero";
import Collection from "@/Components/Collection/Collection";



export default function Home() {
    return <>
        <Hero />
        <Collection/>
        
    </>;
}
