import React, { useEffect, useState } from "react";

interface IRecipie {
  id: number;
  recipieName: string;
  recipieAuthor: string;
  recipieIngredients: object;
  recipieDirections: object;
  cookingTime: number;
  recipieImage: string;
}

export default function Recipes() {
  const [recipies, setRecipies] =  useState<IRecipie[]>([]);

  async function getRecipies() {
    try {
      const apiUrl = `http://localhost:1234/recipies`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { data } = await response.json();
      setRecipies(data);
    } catch(err) {
      console.log("error");
    }
  }
  useEffect(() => {
    getRecipies();
  }, [])
  return (
    <>
      <div className="container absolute relative w-full justify-center p-10">
        <h1 className="flex justify-center text-4xl font-bold font-cursive mb-7  z-50 -mt-12 ml-64" style={{color:"rgba(147,189,203,255)"}}>Recipes</h1>

<div className="flex w-screen overflow-x-auto ">
 
{recipies.map(recipie => (
  <div className="flex-shrink-0 w-96 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mr-10">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={recipie.recipieImage} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {recipie.recipieName}
    </h4>
    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      {recipie.recipieAuthor}
    </p>
  </div>
  <div className="flex justify-center gap-7 p-6 pt-2">
    <a
      href="#facebook"
      className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a
      href="#twitter"
      className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a
      href="#instagram"
      className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
</div>
))}
{recipies.map(recipie => (
  <div className="flex-shrink-0 w-96 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mr-10">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={recipie.recipieImage} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {recipie.recipieName}
    </h4>
    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      {recipie.recipieAuthor}
    </p>
  </div>
  <div className="flex justify-center gap-7 p-6 pt-2">
    <a
      href="#facebook"
      className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a
      href="#twitter"
      className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a
      href="#instagram"
      className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
</div>
))}
</div>
      </div>

    </>
  );
}
