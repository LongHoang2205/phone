import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

function App(){
  return(
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/cart" component={Cart}/>
        <Route  component={Default}/>
      </Switch>
      <Modal />
    </React.Fragment>
    );
}
export default App;
