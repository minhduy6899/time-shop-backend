import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Payment from '../../components/Carts/Payment';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';

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
    title: 'Payment',
    url: '/payment',
  },
];

function PaymentPage() {
  return (
    <div>
      <Header />
      <BreadCrumb title='Payment' breadCrumd={breadCrumd} linkTo={'/payment'} />
      <Payment />
      <Footer />
    </div>
  );
}

export default PaymentPage;
