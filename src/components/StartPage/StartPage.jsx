import React, { Component } from 'react';
import FaceBlock from './FaceBlock';
import ListCards from './ListCards';
import scrollToComponent from 'react-scroll-to-component';
import { scrollToCards } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class StartPage extends Component {


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
        <FaceBlock />
        <ListCards ref={(section) => { this.cards = section; }} /> 
      </div>
    );
  }
}

export default connect(
  state => ({
    scroll: state.active.scroll
  }),
  dispatch => bindActionCreators({ scrollToCards: scrollToCards }, dispatch)
)(StartPage);