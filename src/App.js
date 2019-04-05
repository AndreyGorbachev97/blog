import React, { Component } from 'react';
import Header from './components/Heder/Header';
import Footer from './components/Footer/Footer';
import FaceBlock from './components/Body/FaceBlock';
import ListCards from './components/Body/ListCards';
import scrollToComponent from 'react-scroll-to-component';
import { scrollToCards } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import './App.css';

class App extends Component {


  componentDidUpdate() {
    this.scroll(this.props.scroll)
  }
  scroll = (scroll) => {
    switch (scroll) {
      case 1:
        scrollToComponent(this.cards, { offset: 0, align: 'top', duration: 1500 });
        break;
    }
  }
  render() {
    return (
      <div className="App">
  
        <FaceBlock />
        <ListCards ref={(section) => { this.cards = section; }} />
        <QueueAnim delay={6}>
          <div key="1" >enter in queue</div>
          <div key="2">enter in queue</div>
          <div key="3">enter in queue</div>
        </QueueAnim>
      </div>
    );
  }
}

export default connect(
  state => ({
    scroll: state.active.scroll
  }),
  dispatch => bindActionCreators({ scrollToCards: scrollToCards }, dispatch)
)(App);
