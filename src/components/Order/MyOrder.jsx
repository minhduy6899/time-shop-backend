import React, { Fragment, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { json, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@mui/icons-material/Launch';

import { clearErrors, myOrders } from '../../actions/orderAction';
import './myOrder.scss';

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector(
    (state) => state.myOrdersReducer
  );
  const { user } = useSelector((state) => state.userReducer);

  let userName = JSON.parse(localStorage.getItem('userLogin'));

  const columns = [
    {
      field: 'id',
      headerName: 'Order ID',
      minWidth: 150,
      // type: 'string',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 150,
      // type: 'number',
      flex: 1,
      cellClassName: (params) => {
        return params.getValue(params.id, 'status') === 'Shipped'
          ? 'greenColor'
          : params.getValue(params.id, 'status') === 'Loading'
          ? 'orange'
          : 'redColor';
      },
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      // type: 'number',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'taxPrice',
      headerName: 'Tax price',
      // type: 'number',
      minWidth: 100,
      flex: 1,
    },

    {
      field: 'Total',
      headerName: 'Total',
      // type: 'number',
      minWidth: 150,
      flex: 1,
    },

    {
      field: 'actions',
      flex: 0.3,
      headerName: 'Actions',
      minWidth: 150,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, 'id')}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        taxPrice: item.taxPrice,
        Total: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);
  return (
    <Fragment>
      <div className='myOrdersPage'>
        <Typography className='myOrdersHeading'>
          {userName?.email}'s Orders
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          headerHeight={88}
          pageSize={10}
          disableSelectionOnClick
          className='myOrdersTable'
          autoHeight
        />
      </div>
    </Fragment>
  );
};

export default MyOrders;
