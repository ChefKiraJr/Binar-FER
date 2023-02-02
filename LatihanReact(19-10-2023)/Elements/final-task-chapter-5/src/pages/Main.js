import React from 'react';
import './skel.css';
import './style.css';
import './style-xlarge.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <One />
      <Two />
      <Three />
      <Cta />
      <Footer />
    </>
  );
};

export default Main;
