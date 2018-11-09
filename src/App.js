import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  DECK_PROP_TYPE,
  DEFAULT_DECK,
  getRandomCard,
  getCard
} from 'util/deck'
import Card from 'components/Card'
import CardDetail from 'components/CardDetail'
import './App.css'

export function drawCard (state, props) {
  const { drawnCards } = state
  const { currentDeck, drawCardFunction } = props
  const drawnCard = drawCardFunction(currentDeck.cards, drawnCards)

  if (!drawnCard) return null

  return {
    drawnCards: [...drawnCards, drawnCard]
  }
}

export default class App extends Component {
  static propTypes = {
    currentDeck: DECK_PROP_TYPE,
    drawCardFunction: PropTypes.func.isRequired
  }

  static defaultProps = {
    currentDeck: DEFAULT_DECK,
    drawCardFunction: getRandomCard
  }

  state = {
    drawnCards: [],
    detailCard: undefined
  }

  drawCard = () => this.setState(drawCard)

  showCardDetail = cardId => this.setState(state => ({
    detailCard: getCard(cardId, this.props.currentDeck.cards)
  }))

  hideCardDetail = () => this.setState(state => ({
    detailCard: undefined
  }))

  render () {
    const { currentDeck: { backImageURL } } = this.props
    const { drawnCards, detailCard } = this.state

    return (
      <div className='App'>
        <div className='left-sidebar'>
          <div className='deck'>
            <Card frontImageURL={backImageURL}
              backImageURL={backImageURL}
              className='draw-card'
              onClick={this.drawCard} />
          </div>
        </div>
        <div className='drawn-cards'>
          {drawnCards.map(({ imageURL, cardId }) =>
            <Card cardId={cardId}
              frontImageURL={imageURL}
              backImageURL={backImageURL}
              onMouseOver={this.showCardDetail}
              onMouseOut={this.hideCardDetail}
              key={cardId} />
          )}
        </div>
        <div className='right-sidebar'>
          {detailCard && <CardDetail className='card-detail' card={detailCard} />}
          {!detailCard && <DivinerIntro />}
        </div>
      </div>
    )
  }
}

function DivinerIntro () {
  return <div className='diviner-introduction'>
    <h2>Welcome to Diviner</h2>
    <h3>"For what we don't know..."</h3>
    <p>
      Click on the card to the right to pick a random card from the <a href='https://www.wikiwand.com/en/Rider-Waite_tarot_deck' target='_blank'>Rider-Waite Tarot deck</a>.
    </p>
    <p>
      You can turn over as many cards as you like and if you roll-over any of the turned-over cards you'll see a more in-depth description of the card.
    </p>
  </div>
}
