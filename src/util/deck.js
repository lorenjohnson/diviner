import { difference, find } from 'lodash/fp'
import { random } from 'lodash'
import PropTypes from 'prop-types'

export function getRandomCard (allCards, drawnCards) {
  const remainingCards = difference(allCards, drawnCards)
  if (remainingCards.length === 0) return null
  const drawnCardIndex = random(remainingCards.length - 1)

  return remainingCards[drawnCardIndex]
}

export function getCard (cardId, allCards) {
  return find(c => c.cardId === cardId, allCards)
}

export const CARD_PROP_TYPES = {
  cardId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string,
  desc: PropTypes.string,
  meaningLong: PropTypes.string,
  meaningShort: PropTypes.string
}

export const DECK_PROP_TYPE = PropTypes.shape({
  backImageURL: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape(CARD_PROP_TYPES)
  ).isRequired
})

export const SAMPLE_CARD = {
  cardId: 'card1',
  desc: 'Card 1 description',
  meaningLong: 'Long very meaningful words.',
  imageURL: 'anything'
}

export const TEST_DECK = {
  cards: [
    { imageURL: '/3', cardId: '3' },
    { imageURL: '/4', cardId: '4' }
  ],
  backImageURL: '/backimage.png'
}

// The original Rider-Waite deck back
// taken from: https://i.pinimg.com/originals/74/b3/55/74b355023cfe202a3ee3d9c21175f0a3.png
export const DEFAULT_DECK_BACK_IMAGE = '/images/default_deck_back.png'

export { default as DEFAULT_DECK } from 'data/rider-waite-deck.json'
