import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Header from './components/Heder/Header';
import Footer from './components/Footer/Footer';
import FaceBlock from './components/Body/FaceBlock';
import ListCards from './components/Body/ListCards';
import BaseTextHeader from './components/Body/BaseTextHeader';
import scrollToComponent from 'react-scroll-to-component';
import {scrollToCards} from './actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 
import './App.css';

class App extends Component {


  componentDidUpdate() {
    this.scroll(this.props.scroll)
  }
  scroll = (scroll) => {
    switch(scroll) {
      case 1:
        scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
        break;
    }
  }
  render() {
    
    return (
      <div /*className="App"*/>
        <FaceBlock />
        <ListCards />     
        <section className='violet' ref={(section) => { this.Violet = section; }}>Violet</section>      
      </div>
    );
  }
}

export default connect(
  state => ({
    scroll: state.active.scroll
  }),
)(App);
