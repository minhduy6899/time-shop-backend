import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import MyOrders from '../../components/Order/MyOrder';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Cart',
    url: '/cart',
  },
  {
    title: 'Shipping',
    url: '/shipping',
  },
  {
    title: 'Confirm',
    url: '/confirm',
  },
];
function MyOrderPage() {
  return (
    <div>
      <Header />
      <BreadCrumb breadCrumd={breadCrumd} title='Your Order' linkTo='/orders' />
      <MyOrders />
      <Footer />
    </div>
  );
}

export default MyOrderPage;
