import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    let angle = Math.random() * 90 - 45;
    let x = Math.random() * 40 - 20;
    let y = Math.random() * 40 - 20;
    this._transform = `translateX(-50%) translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`;
  }

  render() {
    return (
      <img
        className='Card'
        style={{ transform: this._transform }}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default Card;
