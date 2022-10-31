import React from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Shipping from '../../components/Carts/Shipping';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Cart',
    url: '/cart',
  },
];

function ShippingPage() {
  return (
    <>
      <Header />
      <BreadCrumb title='Shipping' linkTo='/shipping' breadCrumd={breadCrumd} />
      <Shipping />
      <Footer />
    </>
  );
}

export default ShippingPage;
