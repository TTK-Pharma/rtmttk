import React from 'react';
import './portfolio.scss';
import Port1 from './port1/Port1';
import Port2 from './port2/Port2';
import Port3 from './port3/Port3';
import Port4 from './port4/Port4';


const Portfolio = () => {

  return (
    <div id='Portfolio'>
        <section ><Port1 /></section>
        <section><Port2 /></section>
        <section><Port3 /></section>
        <section><Port4 /></section>
        
    </div>
  )
}

export default Portfolio;