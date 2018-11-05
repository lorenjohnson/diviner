import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  DECK_PROP_TYPES,
  DEFAULT_DECK,
  getRandomCard
} from 'util/deck'
import Card from 'components/Card'
import './App.css'

export default class App extends Component {
  static propTypes = {
    currentDeck: DECK_PROP_TYPES,
    drawCard: PropTypes.func.isRequired
  }

  static defaultProps = {
    currentDeck: DEFAULT_DECK,
    drawCard: getRandomCard
  }

  state = {
    drawnCards: []
  }

  drawCard = (drawnCards) => {
    const { currentDeck, drawCard } = this.props
    const drawnCard = drawCard(currentDeck.cards, drawnCards)
    this.setState({
      drawnCards: [...drawnCards, drawnCard]
    })
  }

  render () {
    const { drawnCards } = this.state
    const { currentDeck } = this.props
    const drawCard = () => this.drawCard(drawnCards)

    return (
      <div className='App'>
        <div className='sidebar'>
          <div className='deck'>
            <img src={'/images/drawcard.png'} onClick={drawCard} />
          </div>
        </div>
        <div className='drawn-cards'>
          {drawnCards.map(({ name, imageURL, shortName }, index) =>
            <Card name={name} frontImageURL={imageURL} backImageURL={currentDeck.backImageURL} key={shortName} />
          )}
        </div>
      </div>
    )
  }
}
