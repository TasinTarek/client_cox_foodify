import React from 'react';
import Item from './Item';


const serve = () => {
    const items = 
      [
        {
          _id: "6369faf11154466bc04d18f9",
          balance: 3405.46,
          picture: "http://placehold.it/32x32",
          name: "Juliana Flores",
        },
        {
          _id: "6369faf1963866c7cc992f63",
          balance: 3840.5,
          picture: "http://placehold.it/32x32",
          name: "Patricia Keith",
        },
        {
          _id: "6369faf1c440445d29cbcc6d",
          balance: 1523.71,
          picture: "http://placehold.it/32x32",
          name: "Christa Mullen",
        },
        {
          _id: "6369faf1317ea33d68d090d6",
          balance: 2194.37,
          picture: "http://placehold.it/32x32",
          name: "Young Jones",
        },
        {
          _id: "6369faf1ed3ae234374778b9",
          balance: 3005.04,
          picture: "http://placehold.it/32x32",
          name: "Hilary Bird",
        },
        {
          _id: "6369faf1666b2d32d89d33b1",
          balance: 1878.21,
          picture: "http://placehold.it/32x32",
          name: "Chan Rosa",
        },
      
    ];
    return (
        <div>
            <div className='text-center p-10'>
                <p className='text-sm'>Our Popular Items</p>
                <p className='text-6xl'>We Serve</p>
            </div>
            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    items.map(item=><Item
                    key={item._id}
                    item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default serve;