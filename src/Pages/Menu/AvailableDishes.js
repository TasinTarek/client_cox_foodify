import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import Dish from './Dish';
const AvailableDishes = ({ date, dishes,  handleAddToCart }) => {
  return (
    <div>
      <h4 className="text-4xl text-center py-10">
        Available_Dishes_For_
        {format(date, "PP", "pp")}
      </h4>
      <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {dishes.map((dish) => (
          <Dish handleAddToCart={handleAddToCart} key={dish._id} dish={dish}></Dish>
        ))}
      </div>
    </div>
  );
};

export default AvailableDishes;