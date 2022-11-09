import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { getOrderDetails, clearErrors } from '../../actions/orderAction';

import './orderDetails.scss';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order, error, loading } = useSelector(
    (state) => state.orderDetailsReducer
  );
  const username = JSON.parse(localStorage.getItem('userLogin'));
  let { orderId } = useParams();
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(orderId));
  }, [dispatch, alert, error, orderId]);
  return (
    <Fragment>
      <div className='orderDetailsPage mb-5'>
        <Typography
          component='h1'
          variant='h3'
          className='title-orderID'
          sx={{ margin: '20px' }}
        >
          Order #{order && order?._id}
        </Typography>
        <div className='row'>
          <div className='orderDetailsContainer col-md-4'>
            <Typography className='title-info'>Shipping Info</Typography>
            <div className='orderDetailsContainerBox'>
              <div>
                <p>Name:</p>
                <span>{username?.email}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>
                  {order?.shippingInfo && order?.shippingInfo?.phoneNo}
                </span>
              </div>
              <div>
                <p>Address:</p>
                <span>
                  {order?.shippingInfo &&
                    `${order?.shippingInfo?.address}, ${order?.shippingInfo?.city}, ${order?.shippingInfo?.state}, ${order?.shippingInfo?.pinCode}, ${order?.shippingInfo?.country}`}
                </span>
              </div>
            </div>
            <Typography className='title-info'>Payment</Typography>
            <div className='orderDetailsContainerBox'>
              <div>
                <p
                  className={
                    order?.paymentInfo &&
                    order?.paymentInfo?.status === 'succeeded'
                      ? 'greenColor'
                      : 'redColor'
                  }
                >
                  {order?.paymentInfo &&
                  order?.paymentInfo?.status === 'succeeded'
                    ? 'PAID'
                    : 'NOT PAID'}
                </p>
              </div>

              <div>
                <p>Amount:</p>
                <span>{order?.totalPrice && order?.totalPrice} $</span>
              </div>
            </div>

            <Typography className='title-info'>Order Status</Typography>
            <div className='orderDetailsContainerBox'>
              <div>
                <p
                  className={
                    order?.orderStatus && order?.orderStatus === 'Delivered'
                      ? 'greenColor'
                      : 'redColor'
                  }
                >
                  {order?.orderStatus && order?.orderStatus}
                </p>
              </div>
            </div>
          </div>

          <div className='orderDetailsCartItems col-md-8'>
            <Typography className='title-info'>Order Items:</Typography>
            <div className='orderDetailsCartItemsContainer'>
              {order?.orderItems &&
                order?.orderItems.map((item) => (
                  <div key={item?.product}>
                    <img src={item?.image} alt='Product' />
                    <Link to={`/products/${item?.product}`}>
                      {item?.name}
                    </Link>{' '}
                    <span>
                      {item?.quantity} X $ {item?.price} ={' '}
                      <b>$ {item?.price * item?.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderDetails;
