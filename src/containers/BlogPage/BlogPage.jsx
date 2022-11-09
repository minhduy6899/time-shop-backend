import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Blog from '../../components/Blog/Blog';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
];

function BlogPage() {
  return (
    <div>
      <Header />
      <BreadCrumb title='Blog' breadCrumd={breadCrumd} linkTo={'/blog'} />
      <Blog />
      <Footer />
    </div>
  );
}

export default BlogPage;
