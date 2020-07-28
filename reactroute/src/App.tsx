import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Category from './Pages/Category';
import Products from './Pages/Products';
//import ProductsRouteParam from './Pages/ProductsRouteParam';
//import CategoryNested from './Pages/CategoryNested';

function App() {
  return (
    <div className="App">
       <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul> 
       </nav>
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      {/*<Route path="/products" component={ProductsRouteParam}/>*/}
      <Route path="/category" component={Category}/> 
      {/*<Route path="/category" component={CategoryNested}/> */}
    </Switch>
    
    </div>
    </div>
  );
}

export default App;
