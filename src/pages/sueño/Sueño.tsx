import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Carousel from '../sueño/Carrusel';

const Sueño = () => {
  return (
    <>
      <Carousel />
      <h1>Habit+</h1>
    </>
  );
};

export default Sueño;