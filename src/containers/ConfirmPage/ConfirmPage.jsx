import React from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Shipping from '../../components/Carts/ConfirmOrder';

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
function ConfirmPage() {
  return (
    <>
      <Header />
      <BreadCrumb
        title='Confirm Order'
        linkTo='/confirm'
        breadCrumd={breadCrumd}
      />
      <Shipping />
      <Footer />
    </>
  );
}

export default ConfirmPage;
