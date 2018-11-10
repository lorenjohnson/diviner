import { times, some, isMatch } from 'lodash/fp'
import {
  getRandomCard,
  getCard
} from './deck'

describe('getRandomCard', () => {
  it('should not draw from drawn cards', () => {
    const fullDeck = [{ id: 'card1' }, { id: 'card2' }, { id: 'card3' }]
    const alreadyDrawnCards = [{ id: 'card2' }]
    let drawnCards = []

    // testing against (lodash) random, could mock
    times(() => drawnCards.push(getRandomCard(fullDeck, alreadyDrawnCards)), 50)
    expect(drawnCards).toEqual(
      expect.not.arrayContaining(alreadyDrawnCards)
    )
  })

  it("shouldn't have reversed cards (by default)", () => {
    const fullDeck = [{ id: 'card1' }, { id: 'card2' }, { id: 'card3' }]
    const alreadyDrawnCards = [{ id: 'card2' }]
    let drawnCards = []

    times(() => drawnCards.push(getRandomCard(fullDeck, alreadyDrawnCards)), 50)
    expect(some({ reversed: true }, drawnCards)).toBeFalsy()
  })

  it('should have reversed cards when parameter is set', () => {
    const fullDeck = [{ id: 'card1' }, { id: 'card2' }, { id: 'card3' }]
    const alreadyDrawnCards = [{ id: 'card2' }]
    let drawnCards = []

    times(() => drawnCards.push(getRandomCard(fullDeck, alreadyDrawnCards, true)), 50)
    expect(some({ reversed: true }, drawnCards)).toBeTruthy()
  })

  it('draws all cards', () => {
    const fullDeck = [{ id: 'card1' }, { id: 'card2' }, { id: 'card3' }]
    const alreadyDrawnCards = [{ id: 'card2' }, { id: 'card3' }]
    const drawnCard = getRandomCard(fullDeck, alreadyDrawnCards)

    expect(isMatch({ id: 'card1' }, drawnCard)).toBeTruthy()
  })

  it('should return null if all cards have been draw', () => {
    const fullDeck = [{ id: 'card1' }, { id: 'card2' }, { id: 'card3' }]
    const alreadyDrawnCards = fullDeck
    const drawnCard = getRandomCard(fullDeck, alreadyDrawnCards)

    expect(drawnCard).toEqual(null)
  })
})

test('getCard', () => {
  const cards = [
    { cardId: 'cardId1', description: 'thing1' },
    { cardId: 'cardId2', description: 'thing2' }
  ]

  expect(getCard('cardId2', cards)).toEqual(cards[1])
})
