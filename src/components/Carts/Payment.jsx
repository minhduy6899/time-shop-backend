import React, { Fragment, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from 'react-router-dom';

import './payment.scss';
import CheckoutSteps from './CheckoutSteps';
import { createOrder, clearErrors } from '../../actions/orderAction';

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cartReducer);
  // const { user } = useSelector((state) => state.userReducer);
  const { error } = useSelector((state) => state.newOrderReducer);

  // const paymentData = {
  //   amount: Math.round(orderInfo.totalPrice * 100),
  // };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createOrder(order));
    navigate('/orderSuccess');
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <div className='container'>
        <CheckoutSteps activeStep={2} />
        <div className='paymentContainer'>
          <form className='paymentForm' onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>
            <div>
              <CreditCardIcon />
              <input
                type='text'
                className='paymentInput'
                placeholder='Card number'
              />
            </div>
            <div>
              <EventIcon />
              <input
                type='text'
                className='paymentInput'
                placeholder='Expire'
              />
            </div>
            <div>
              <VpnKeyIcon />
              <input type='text' className='paymentInput' placeholder='CVC' />
            </div>

            <input
              type='submit'
              value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className='paymentFormBtn'
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
