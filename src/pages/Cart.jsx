import React from "react";
import CartBookItem from "../components/uirepeat/CartBookItem";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

function Cart({ cart, updateCartQuantity, books, removeItem }) {
  // A FUNCTION TO CALCULATE THE TOTAL

  function total() {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  }

  return (
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              {/* version 1 */}
              <div className="cart__body">
                {/* loop thrrough the cart array of objects */}
                {cart.length === 0 ? (
                  <div className="cart__empty">
                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                    <h2>You don't have any books in youe cart!</h2>
                    <Link to={"/books"}>
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                ) : (
                  cart.map((cartitem) => (
                    /*  <CartBookItem
                      key={cartitem.id}
                      cartitembook={cartitem}
                      updateCartQuantity={updateCartQuantity}
                    /> */
                    <div className="cart__item" key={cartitem.id}>
                      <div className="cart__book">
                        <img
                          src={cartitem.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {cartitem.title}
                          </span>
                          <span className="cart__book--price">
                            $
                            {(
                              cartitem.salePrice || cartitem.originalPrice
                            ).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(cartitem)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={90}
                          className={"cart__input"}
                          value={cartitem.quantity}
                          onChange={(event) =>
                            updateCartQuantity(cartitem, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (cartitem.salePrice || cartitem.originalPrice) *
                          cartitem.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* check to see if the cart is empty  */}
            {cart.length === 0 ? null : (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  onClick={() =>
                    alert("checkout functionality is still in progress :)")
                  }
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
