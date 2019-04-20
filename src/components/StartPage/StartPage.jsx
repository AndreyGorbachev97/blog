import React, { Component } from 'react';
import FaceBlock from './FaceBlock';
import ListCards from './ListCards';
import scrollToComponent from 'react-scroll-to-component';
import { scrollToCards } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {requestPosts} from '../../actions/index';
import Header from '../Heder/Header';
import Footer from '../Footer/Footer';

class StartPage extends Component {

  componentWillMount = () => {
    this.props.requestPosts()
  }
  componentDidUpdate() {
    this.scroll(this.props.scroll)
  }
  scroll = (scroll) => {
    switch (scroll) {
      case 1:
        scrollToComponent(this.cards, { offset: 0, align: 'top', duration: 1500 });
        this.props.scrollToCards({scroll: 0})
        break;
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <FaceBlock />
        <ListCards ref={(section) => { this.cards = section; }} />
        <Footer/> 
      </div>
    );
  }
}

export default connect(
  state => ({
    scroll: state.active.scroll
  }),
  dispatch => bindActionCreators({ 
    scrollToCards: scrollToCards,
    requestPosts: requestPosts
   }, dispatch)
)(StartPage);