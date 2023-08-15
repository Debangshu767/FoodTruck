import React from "react";
import CarousalItem from "./CarousalItem";
import tomato from "../assets/grilled-tomatoes-1-846x846 1.png";
import snackImage from "../assets/meal-prep-ideas-846x846 1.png";
import postWorkoutImage from "../assets/meal-prep-ideas-846x846 1 (1).png";
import grillCornImage from "../assets/grilled-tomatoes-1-846x846 1 (1).png";
import crunchwrapImage from "../assets/meal-prep-ideas-846x846 1 (3).png";
import broccoliSoupImage from "../assets/meal-prep-ideas-846x846 1 (2).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousal = () => {
  const recipeDataArray = [
    {
      imageUrl: tomato,
      title: "Grilled Tomatoes at home",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageUrl: snackImage,
      title: "Snacks for Travel",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageUrl: postWorkoutImage,
      title: "Post-workout Recipes",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageUrl: grillCornImage,
      title: "How To Grill Corn",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageUrl: crunchwrapImage,
      title: "Crunchwrap Supreme",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageUrl: broccoliSoupImage,
      title: "Broccoli Cheese Soup",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  var smsettings = {
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow : 1,
    rows : 3,
    slidesPerRow: 1
  };

  return (
    <div className="mx-6 md:mx-12 mt-40">
      <h1 className="text-xl md:text-4xl font-bold text-[#0E2368]">
        Latest Articles
      </h1>
      <div className='hidden md:block'>
      <Slider {...settings}>
      {recipeDataArray.map((item, index) => (
        <CarousalItem
          title={item.title}
          imageurl={item.imageUrl}
          description={item.description}
        />
      ))}
    </Slider>  

      </div>

      <div className='md:hidden block'>
      <Slider {...smsettings}>
      {recipeDataArray.map((item, index) => (
        <CarousalItem
          title={item.title}
          imageurl={item.imageUrl}
          description={item.description}
        />
      ))}
    </Slider>  

      </div>

        
 
    </div>
  );
};

export default Carousal;
