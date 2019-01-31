import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Header from './components/Heder/Header';
import Footer from './components/Footer/Footer';
import FaceBlock from './components/Body/FaceBlock';
import ListCards from './components/Body/ListCards';
import BaseTextHeader from './components/Body/BaseTextHeader';
import scrollToComponent from 'react-scroll-to-component';
import {connect} from 'react-redux';


import './App.css';

class App extends Component {

  render() {
    return (
      <div /*className="App"*/>
        <FaceBlock />
        <ListCards />           
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(App);
