import { GET_PRODUCT_ITEM, GET_ALL_PRODUCTS, GET_PRODUCT_FILTER_ITEM, GET_PRODUCTS_PENDING } from "../constants/getAllProducts";

export const getProductItemAction = (value) => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(
            `https://time-shop-backend.onrender.com/products/${value}`, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: GET_PRODUCT_ITEM,
            payload: data
        });
    } catch (err) {
        alert(err);
    }

}

export const getProductsFilterAction = () => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(
            `https://time-shop-backend.onrender.com/allProducts`, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: GET_PRODUCT_FILTER_ITEM,
            payload: data
        });
    } catch (err) {
        alert(err);
    }

}

export const getAllProductsAction = (value) => async dispatch => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    await dispatch({
        type: GET_PRODUCTS_PENDING
    });

    try {
        const response = await fetch(
            `https://time-shop-backend.onrender.com/allProducts?limit=${value}`, requestOptions
        );

        const data = await response.json();
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data.products
        });
    } catch (err) {
        alert(err);
    }
};