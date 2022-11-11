import React from 'react';

const BookingModal = ({order}) => {
    console.log(order);
    return (
      <div>
        <input type="checkbox" id="modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              {order.price}
            </p>
          </div>
        </div>
      </div>
    );
};

export default BookingModal;