import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { TEST_DECK } from 'util/deck'
import App, { drawCard } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    ReactTestRenderer.create(<App />)
  })

  it('draws and renders drawn cards', () => {
    const props = {
      currentDeck: TEST_DECK,
      drawCardFunction: jest.fn((c, d) => c[d.length])
    }
    const component = ReactTestRenderer.create(<App {...props} />)

    component.getInstance().drawCard({}, props)
    component.getInstance().drawCard({}, props)

    expect(props.drawCardFunction).toHaveBeenCalledTimes(2)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('shows detail card if set', () => {
    const props = {
      currentDeck: TEST_DECK,
      drawCardFunction: jest.fn((c, d) => c[d.length])
    }
    const component = ReactTestRenderer.create(<App {...props} />)

    component.getInstance().showCardDetail('3')
    expect(component.toJSON()).toMatchSnapshot()
  })
})

test('drawCard adds cards from current deck and uses provided draw function', () => {
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
  expect(props.drawCardFunction).toHaveBeenCalledTimes(1)
})
