import React, { useState } from "react";
import AboutTruck from '../../images/aboutruck.png';

export default function About() {
  return (
    <>
      <div className=" absolute relative p-10 bg-white z-30 grid grid-cols-2">
        <div>
        <h1 className="text-4xl font-bold font-cursive mb-7  z-50 -mt-12 ml-64" style={{color:"rgba(147,189,203,255)"}}>About page</h1>
          
        <p className="text-xl text-gray-600 font-serif ml-7 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum voluptatum exercitationem necessitatibus, voluptates quidem dolor commodi nemo quo at tempore libero provident laudantium harum. Adipisci necessitatibus asperiores sed a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus quisquam fugiat aperiam earum in aliquam eaque quibusdam ipsa deleniti nemo esse neque velit odio asperiores, voluptatum, sapiente omnis iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum molestiae est. Laborum ipsum, nostrum aliquid debitis possimus dolorum, molestias sit deserunt aut odio deleniti quia, sequi quam beatae enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptatibus aut sit aperiam labore, aspernatur officiis impedit placeat totam similique rem laborum commodi hic harum quae quas numquam ipsum maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          
        </p>
        </div>
        <div className="mt-0 pt-0 ml-20">
          <img src={AboutTruck} width="90%"/>
        </div>
      </div>

    </>
  );
}
