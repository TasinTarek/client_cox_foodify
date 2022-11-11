import React, { useEffect, useState } from 'react';
import MenuBanner from '../Menu/MenuBanner'
import "react-day-picker/dist/style.css";
import Footer from '../Shared/Footer'
import AvailableDishes from './AvailableDishes';
import BookingModal from './BookingModal';

const Menu = () => {

    const [order, setOrder] =useState(null)
   
    const [date, setDate] = useState(new Date());
   
    const [cart, setCart] = useState([]);
   
    const handleAddToCart = (dish) => {
      
    const newCart =[...cart, dish];
    setCart(newCart);
      console.log(cart);
    };
    
    const [dishes, setDishes] = useState([]);
    
    
    useEffect(() => {
       fetch("dishes.json")
         .then((res) => res.json())
         .then((data) => setDishes(data));
     });
    return (
      <div>
       
          <MenuBanner
            cart={cart}
            setOrder={setOrder}
            date={date}
            setDate={setDate}
          ></MenuBanner>
       

        
        <AvailableDishes
          handleAddToCart={handleAddToCart}
          date={date}
          dishes={dishes}
          setDishes={setDishes}
        ></AvailableDishes>
        <>{order && <BookingModal order={order}></BookingModal>}</>
        <Footer />
      </div>
    );
};

export default Menu;