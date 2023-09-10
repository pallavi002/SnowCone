import React, { useState } from "react";
import HeroBanner from "../../components/heroBanner";
import About from "../../components/about";
import FAQ from "../../components/faq";
import Contact from "../../components/contact";
import Recipes from "../../components/recipes";
import Seasonal from "../../components/seasonal";
import Footer from "../../components/footer";

export function Dashboard() {
  return (
    <>
        <HeroBanner/>
        <About/>
        <Recipes/>
        <Seasonal/>
        <FAQ/>
        <Contact/>
    </>
  );
}
