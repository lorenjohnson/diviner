import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import App, { drawCard } from './App'

// TODO:
// test detail card vs description switch
// test showCardDetail?

describe('App', () => {
  it('renders without crashing', () => {
    ReactTestRenderer.create(<App />)
  })

  it('draws and renders drawn cards', () => {
    const testDeck = {
      cards: [
        { imageURL: '/3', cardId: '3' },
        { imageURL: '/4', cardId: '4' }
      ],
      backImageURL: '/backimage.png'
    }
    const props = {
      currentDeck: testDeck,
      drawCardFunction: jest.fn((c, d) => c[d.length])
    }
    const component = ReactTestRenderer.create(<App {...props} />)

    component.getInstance().drawCard({}, props)
    component.getInstance().drawCard({}, props)
    component.getInstance().drawCard({}, props)

    expect(props.drawCardFunction).toHaveBeenCalledTimes(3)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

test('drawCard', () => {
  const state = {
    drawnCards: ['1', '2']
  }
  const props = {
    currentDeck: {
      cards: ['3', '4', '5']
    },
    drawCardFunction: jest.fn((c, d) => c[0])
  }
  const expectedState = {
    drawnCards: ['1', '2', '3']
  }

  expect(drawCard(state, props)).toEqual(expectedState)
})
