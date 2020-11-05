import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="hom__row">
          <Product
            id="46513219"
            title="The Lean Startup"
            price={22.51}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="16584961"
            title="Green Toys Ferry Boat with Mini Cars Bathtub Toy, Blue/White, Standard"
            price={15.58}
            rating={3}
            image="https://m.media-amazon.com/images/I/41Yo2roRF0L._AC_SY161_.jpg"
          />
        </div>

        <div className="hom__row">
          <Product
            id="51327946"
            title="GUND Huggy Buddha Gray Plush, 11 inches"
            price={15.58}
            rating={3}
            image="https://m.media-amazon.com/images/I/51Y5SSQIa4L._AC_SY161_.jpg"
          />
          <Product
            id="89521856"
            title="InnoGear Diffusers for Essential Oils, Wood Grain Essential Oil Diffuser Ultrasonice Aromatherapy Diffusers Aroma Cool Mist Humidifier with Timer Waterless Auto Off, 200ml, Yellow"
            price={15.58}
            rating={3}
            image="https://m.media-amazon.com/images/I/413S8eTruRL._AC_SY161_.jpg"
          />
          <Product
            id="93164356"
            title="KeepCup, Reusable Glass Cup Brew Cork, Medium 12oz | 340mls, Press"
            price={15.58}
            rating={3}
            image="https://m.media-amazon.com/images/I/41F5UPCcRCL._AC_SY163_.jpg"
          />
        </div>

        <div className="hom__row">
          <Product
            id="32165126"
            title="SAMSUNG 85-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN85TU8000FXZA, 2020 Model)"
            price={15.58}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91FcuuZwcrL._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
