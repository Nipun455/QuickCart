'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from 'next/head';
const Page = () => {
  return (
    <>
    
      <Head>
        <meta charSet="utf-8" />
        <title>Electronics Gadgets</title>
        <link rel="canonical" href="https://quick-car-electronics-gadgets.vercel.app/" />
        <meta name="description" content="Helmet application" />
        <meta
          name="keywords"
          content="mac book, best price electronics, Best Smartphones Under 50,000, Apple iPhone 14, Affordable Tablets for Work & Entertainment, EMI Options Available on Smartphones, Discount Offers on Tablets & Laptops"
        />
      </Head>


      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">

        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <a href="https://indianipun123.blogspot.com/" >All Blog related to that</a>
        <NewsLetter />
      </div>
      <Footer />


    </>
  );
};

export default Page;
