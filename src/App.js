import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import CollapsibleExample from './components/navbar';
import Homepage from './components/homepage';
import Product from './components/product';
import { Component } from 'react';

function App() {
  return (
    <div>
      <CollapsibleExample/>
      <Homepage/>
      <div className='d-flex flex-wrap justify-content-center'>
        <Product/>
      </div>
    </div>
  );
}

export default App;
