import React from 'react';
import './main.css';
import Pascal from './components/Pascal';
import TwoSum from './components/TwoSum';

const Main = () => {
  return (
    <div className="main-container">
      <TwoSum />
      <Pascal />
    </div>
  );
};

export default Main;
