import React, { useState } from "react";
import "./FoodItems.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FoodItems = ({ food }) => {
   const { id, name, title, info, price, img, type } = food;

   return (
      <div>
         <motion.div
            whileHover={{
               scale: 1.05,
               //    textShadow: "0px 0px 4px gray",
            }}
            className="food-items"
         >
            <Link
               style={{ color: "inherit", textDecoration: "none" }}
               to={`/fooddatails/${name}`}
            >
               <div className="card text-center">
                  <img src={img} alt="" />
                  <div className="card-body">
                     <h5 className="card-title">{name}</h5>
                     <p className="card-text">{title}</p>
                     <h4>$ {price}</h4>
                  </div>
               </div>
            </Link>
         </motion.div>
      </div>
   );
};

export default FoodItems;
