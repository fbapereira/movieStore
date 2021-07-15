import React from 'react';

import './loader.component.scss';
import loader from '../assets/loader.gif';

const Loader = () => (
  <div className="loader">
    <img src={loader} alt="loader" />
  </div>
);

export default Loader;
