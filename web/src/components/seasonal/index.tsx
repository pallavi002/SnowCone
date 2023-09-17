import React, { useState } from "react";
import SummerImage from "../../images/summer.png";
import WinterImage from "../../images/winter.jpg";
import RainyImage from "../../images/rainy.jpg";
import AutumnImage from "../../images/autumnn.jpg";

export default function Seasonal() {
  return (
    <>
      <div className="container absolute relative flex w-full justify-center p-10">
        <h1
          className="text-4xl font-bold font-cursive mb-7  z-50 -mt-12 ml-64 text-center"
          style={{ color: "rgba(147,189,203,255)" }}
        >
          Seasonal Icecreams
        </h1>
      </div>

      <div className="grid grid-cols-2 mb-5">
        <div className="justify-end my-auto text-center">
          <p className=" mx-32 text-m text-gray-600 font-serif leading-loose ">
            Summer is the season of sun, fun, and of course, ice cream! When the
            temperature starts to rise, there's nothing quite like indulging in
            a scoop of your favorite frozen treat to beat the heat. Summer ice
            creams are a delightful symphony of flavors, textures, and colors
            that capture the essence of this sunny season. From the tropical
            paradise of coconut and pineapple to the refreshing zing of lemon
            and lime, summer ice creams offer a wide range of flavors to
            tantalize your taste buds. Whether you prefer the fruity goodness of
            sorbets, the creaminess of classic vanilla, or the excitement of
            unique creations like key lime pie or blueberry cheesecake, there's
            an ice cream flavor for everyone.
          </p>
        </div>

        <img
          className="rounded-full h-96  ml-10 my-auto"
          src={SummerImage}
          alt="image description"
        />
      </div>
      <div className="grid grid-cols-2 mb-5">
        <img
          className="rounded-full h-96 my-auto mx-auto"
          src={RainyImage}
          alt="image description"
        />
        <div className="justify-end my-auto text-center">
          <p className=" mr-48 ml-10 text-m text-gray-600 font-serif leading-loose ">
            Winter is a season of cozy sweaters, crackling fires, and,
            surprisingly, ice cream! While it may seem counterintuitive to
            indulge in frozen treats during the coldest months, winter ice
            creams offer a unique and delightful experience. These frosty
            creations are designed to complement the chilly weather and bring
            comfort and joy. Imagine sipping hot cocoa by the fireplace and
            pairing it with a scoop of rich and velvety dark chocolate ice
            cream. The contrast of warm and cold creates a heavenly combination
            that warms your heart and soul. Winter ice creams often feature
            flavors like cinnamon, peppermint, and gingerbread, infusing the
            spirit of the season into every bite.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-5">
        <div className="justify-end my-auto text-center">
          <p className=" mx-32 text-m text-gray-600 font-serif leading-loose ">
            Rainy days have a special charm of their own, and what better way to
            embrace that cozy atmosphere than with a bowl of comforting ice
            cream? Rainy day ice creams are all about indulgence, offering a
            sweet escape from the gloomy weather. Imagine the soothing sound of
            raindrops against your window as you enjoy a scoop of creamy caramel
            ice cream. The smooth, buttery flavor and luscious swirls of caramel
            create a comforting treat that feels like a warm hug from the inside
            out. For those who seek solace in the familiar, classic flavors like
            cookies and cream or butter pecan provide a sense of nostalgia and
            happiness. The crunch of cookie pieces or the nutty goodness of
            pecans adds a delightful contrast to the creamy base.
          </p>
        </div>

        <img
          className="rounded-full h-96  ml-10 my-auto"
          src={WinterImage}
          alt="image description"
        />
      </div>
      <div className="grid grid-cols-2 mb-5">
        <img
          className="rounded-full h-96 mx-auto my-auto"
          src={AutumnImage}
          alt="image description"
        />
        <div className="justify-end my-auto text-center">
          <p className="mr-48 ml-10 text-m text-gray-600 font-serif leading-loose ">
            Autumn is a season of vibrant foliage, crisp air, and a bountiful
            harvest of flavors. Autumn ice creams capture the essence of this
            beautiful season by incorporating the tastes of apple orchards,
            pumpkin patches, and spice-filled kitchens. Imagine savoring a scoop
            of apple pie ice cream, where cinnamon-spiced apples and buttery pie
            crust swirl together in a creamy embrace. This flavor embodies the
            essence of autumn, with each bite delivering the warmth and comfort
            of homemade pie. Pumpkin spice ice cream, with its aromatic blend of
            cinnamon, nutmeg, and cloves, is a beloved favorite during this
            season. The rich, velvety texture and earthy undertones of pumpkin
            create a dessert that evokes the feeling of a crisp autumn day.
          </p>
        </div>
      </div>
    </>
  );
}
