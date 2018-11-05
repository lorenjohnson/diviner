import { getRandomCard } from './deck'
import { times } from 'lodash/fp'

describe('getRandomCard', () => {
  it('should not draw from drawn cards', () => {
    const fullDeck = ['card1', 'card2', 'card3']
    const alreadyDrawnCards = ['card2']
    let drawnCards = []

    // testing against lodash#random, could mock
    times(() => drawnCards.push(getRandomCard(fullDeck, alreadyDrawnCards)), 100)

    expect(drawnCards).toEqual(
      expect.not.arrayContaining(alreadyDrawnCards)
    )
  })

  it('draws all cards', () => {
    const fullDeck = ['card1', 'card2', 'card3']
    const alreadyDrawnCards = ['card2', 'card3']
    const drawnCard = getRandomCard(fullDeck, alreadyDrawnCards)

    expect(drawnCard).toEqual('card1')
  })

  it('should return null if all cards have been draw', () => {
    const fullDeck = ['card1', 'card2', 'card3']
    const alreadyDrawnCards = fullDeck
    const drawnCard = getRandomCard(fullDeck, alreadyDrawnCards)

    expect(drawnCard).toEqual(null)
  })
})
