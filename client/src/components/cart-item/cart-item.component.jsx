import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import Icon from "../icon/icon.component";
import { Link } from "react-router-dom";
import "./cart-item.styles.scss";

const CartItem = ({ item, clearItem, toggleCartHidden }) => {
  const { images, price, name, quantity, collection, id } = item;

  return (
    <div className="cart-item">
      <Link
        to={`/shop/${collection}/${id}`}
        onClick={toggleCartHidden}
        className="ignore-co-cart"
      >
        <img src={images.small} alt={name} />
      </Link>
      <div className="item-details">
        <div className="col-1">
          <Link
            to={`/shop/${collection}/${id}`}
            onClick={toggleCartHidden}
            className="ignore-co-cart"
          >
            <span className="name bold">{name}</span>
          </Link>
          <span className="quantity">Quantity: {quantity}</span>
        </div>
        <div className="col-2">
          <span className="price bold">${price}</span>
        </div>
      </div>
      <button
        className="delete-button ignore-co-cart"
        onClick={() => clearItem(item)}
        aria-label="remove item from cart"
      >
        <Icon icon="trash" />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
