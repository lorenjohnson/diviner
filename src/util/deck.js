import { difference } from 'lodash/fp'
import { random } from 'lodash'
import PropTypes from 'prop-types'

export function getRandomCard (allCards, drawnCards) {
  const remainingCards = difference(allCards, drawnCards)
  if (remainingCards.length === 0) return null
  const drawnCardIndex = random(remainingCards.length - 1)

  return remainingCards[drawnCardIndex]
}

export const DECK_PROP_TYPES = PropTypes.shape({
  backImageURL: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
})

export const DEFAULT_DECK_BACK_IMAGE = 'https://i.pinimg.com/originals/74/b3/55/74b355023cfe202a3ee3d9c21175f0a3.png'

export { default as DEFAULT_DECK } from 'data/rider-waite-deck.json'
