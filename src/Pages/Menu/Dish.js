import React from 'react';

const Dish = ({ dish, handleAddToCart }) => {
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dish.name}</h2>
        <p>
          {dish.slots.length > 0 ? (
            <span>{dish.slots[0]}</span>
          ) : (
            <span className="text-red-600">Foodies got them all</span>
          )}
        </p>
        <span>{dish.slots.length} Available</span>
        <div className="card-actions">
          <button
            onClick={()=>handleAddToCart(dish)}
            disabled={dish.slots.length === 0}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dish;