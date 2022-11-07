import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@mui/icons-material/Launch";

import { clearErrors, myOrders } from "../../actions/orderAction";
import "./myOrder.scss";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrdersReducer);
  const { user } = useSelector((state) => state.userReducer);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.6 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },

    // {
    //   field: "actions",
    //   flex: 0.3,
    //   headerName: "Actions",
    //   minWidth: 150,
    //   type: "number",
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       <Link to={`/order/${params.getValue(params.id, "id")}`}>
    //         <LaunchIcon />
    //       </Link>
    //     );
    //   },
    // },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
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
      {/* {orders ?
        <div className="d-flex justify-content-center p-5">
          <h1>YOUR ORDER IS EMTY !!!</h1>
        </div> : */}
      <div className="myOrdersPage">
        <Typography className="myOrdersHeading">{user?.fullName}'s Orders</Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="myOrdersTable"
          autoHeight
        />

      </div>
      {/* } */}

    </Fragment>
  );
};

export default MyOrders;
