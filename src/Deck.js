import React, { Component } from 'react';
import './Deck.css';
import { SHUFFLED_DECK_URI, fetchAsync, getDrawACardURI } from './utils/api';
import Card from './Card';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.deckId = '';

    this.state = {
      remaining: '',
      playedCards: [],
    };

    this.drawACard = this.drawACard.bind(this);
  }

  async componentDidMount() {
    // send a request to get a new deck of cards
    const deckinfo = await fetchAsync(SHUFFLED_DECK_URI);
    this.deckId = deckinfo.deck_id;
    this.setState({ remaining: deckinfo.remaining });
  }

  async drawACard() {
    try {
      const cardInfo = await fetchAsync(getDrawACardURI(this.deckId));
      if (!cardInfo.success) {
        throw new Error('No Card Remaining');
      }
      this.setState(({ playedCards }) => ({
        playedCards: [...playedCards, cardInfo.cards[0]],
        remaining: cardInfo.remaining,
      }));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { remaining, playedCards } = this.state;
    return (
      <div className='Deck'>
        <h1>The deck has {remaining} cards left</h1>
        <button onClick={this.drawACard}>Play A Card</button>
        <div className='Deck-cardarea'>
          {playedCards.length !== 0 &&
            playedCards.map(({ code, image, value, suit }) => (
              <Card key={code} src={image} alt={`${value} ${suit}`} />
            ))}
        </div>
      </div>
    );
  }
}

export default Deck;
