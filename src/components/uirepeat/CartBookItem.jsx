import React from "react";

function CartBookItem({ cartitembook, updateCartQuantity }) {
  return (
    <div className="cart__item">
      <div className="cart__book">
        <img src={cartitembook.url} alt="" className="cart__book--img" />
        <div className="cart__book--info">
          <span className="cart__book--title">{cartitembook.title}</span>
          <span className="cart__book--price">
            ${(cartitembook.salePrice || cartitembook.originalPrice).toFixed(2)}
          </span>
          <button className="cart__book--remove">Remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input
          type="number"
          min={0}
          max={90}
          className={"cart__input"}
          value={cartitembook.quantity}
          onChange={(event) => updateCartQuantity(event.target.value)}
        />
      </div>
      <div className="cart__total">$10.00</div>
    </div>
  );
}

export default CartBookItem;
