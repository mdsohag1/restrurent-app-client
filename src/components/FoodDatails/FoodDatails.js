import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/fakedata";
import "./FoodDatails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./../../App";

const FoodDatails = () => {
   const { singleFood } = useParams();
   const [foodDatails, setFoodDatails] = useState(Data);
   const [cart, setCart] = useContext(UserContext);

   const food = foodDatails.find((item) => item.name === singleFood);
   const { name, price, img, info, quantity, title, id, type } = food;

   const handleCart = (food) => {
      const newCart = [...cart, food];
      const sameFood = newCart.filter((pd) => pd.id === food.id);
      const count = sameFood.length;
      food.quantity = count;
      setCart(newCart);
      console.log(count);
   };
   const handleIncrease = (food) => {
      const newCart = [...cart, food];
      const sameFood = newCart.filter((pd) => pd.id === food.id);
      const count = sameFood.length;
      food.quantity = count;
      setCart(newCart);
   };

   const foodPlate = foodDatails.find((pt) => {
      let preFood;
      if (id < 16) {
         preFood = pt.id === id + 1;
      } else {
         preFood = pt.id === id - 1;
      }
      return preFood;
   });

   const foodPlate2 = foodDatails.find((pt) => {
      let preFood;
      if (id < 16) {
         preFood = pt.id === id + 2;
      } else {
         preFood = pt.id === id - 3;
      }
      return preFood;
   });

   return (
      <div className="container alldetails mt-5">
         <div className="Food-text">
            <h1>{name}</h1>
            <p>{info}</p>
            <h2>${price}</h2>
            <div className="btn-place">
               <button className="btn mx-2"> - </button>
               <h5 className="d-inline">{cart.length ? quantity : 1}</h5>
               <button
                  onClick={() => handleIncrease(food)}
                  className="btn mx-2 text-danger"
               >
                  {" "}
                  +{" "}
               </button>
            </div>
            <button className="addCard" onClick={() => handleCart(food)}>
               <FontAwesomeIcon
                  className="addCart-icon"
                  icon={faCartShopping}
               />{" "}
               Add
            </button>
            <div className="sub-img">
               <img src={foodPlate.img} alt="" />
               <img src={foodPlate2.img} alt="" />
            </div>
         </div>
         <div className="food-image">
            <img src={img} alt="" />
         </div>
      </div>
   );
};

export default FoodDatails;
