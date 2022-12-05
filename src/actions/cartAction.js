import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  ADD_TO_CART_SUCCESS
} from "../constants/cartType";
import axios from "axios";
// id, quantity, color, size
// Add to Cart
export const addItemsToCart = (productType) => async (dispatch, getState) => {

  const { data } = await axios.get(`https://time-shop-backend.onrender.com/products/${productType.productId}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.promotionPrice,
      image: data.product.imageUrl,
      amount: data.product.amount,
      color: productType?.color || data.product.color,
      size: productType?.size || data.product.size,
      quantity: productType.quantity,
    },
  });

  dispatch({ type: ADD_TO_CART_SUCCESS })

  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

