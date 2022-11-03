import React from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './orderSuccess.scss';

const OrderSuccess = () => {
  return (
    <div className='orderSuccess'>
      <CheckCircleOutlineOutlinedIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to='/orders'>View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
