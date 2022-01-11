
   
import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const GroceryPage = () => (
  <div>
    <h1>Grocery PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Link>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={GroceryPage} />
      </Link>
    </div>
  );
}

export default App;