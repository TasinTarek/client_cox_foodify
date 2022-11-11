import React, { useState } from 'react';
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import menubanner from '../../Assets/Images/menubanner.jpg'


const MenuBanner = ({ date, setDate, cart, setOrder}) => {

  let total=0;
  for(const product of cart){
    total = total+product.price

  }
  let name=[];
  for(const product of cart){
    name= name+product.name
  }
  let final=[];
  for(const product of cart){
    final= product.price
  }
  
  
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${menubanner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="grid lg:grid-cols-2   gap-5">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center">Cart</h1>
            <span className="text-xs">
              You have Selected: {cart.length} items
            </span>
            <span className="text-xs">Price: {total}</span>
            <span className="text-xs">
              Selected dishes: {name}
              {final}
            </span>
            <span className="text-xs">Total: {final}</span>
            <div className="form-control mt-6">
              
                <label
                  onClick={() => setOrder(cart)}
                  htmlFor="modal"
                  className="btn"
                >
                  Order Now
                </label>
              
            </div>
          </div>
        </div>
        <div className="text-center">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;