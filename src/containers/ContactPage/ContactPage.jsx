import React from 'react';

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Contact from '../../components/Contact/Contact';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];
function ContactPage() {
  return (
    <div>
      <Header />
      <BreadCrumb breadCrumd={breadCrumd} title='Contact' linkTo={'/contact'} />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
