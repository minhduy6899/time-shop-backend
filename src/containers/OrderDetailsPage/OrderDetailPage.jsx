import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import OrderDetails from '../../components/Order/OrderDetails';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Order Detail',
    url: '/orders',
  },
];
function OrderDetailPage() {
  return (
    <div>
      <Header />
      <BreadCrumb breadCrumd={breadCrumd} title='Contact' linkTo={'/contact'} />
      <OrderDetails />
      <Footer />
    </div>
  );
}

export default OrderDetailPage;
