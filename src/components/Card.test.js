import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import Card from './Card'

it('matches last snapshot', () => {
  const component = ReactTestRenderer.create(
    <Card frontImageURL='/frontimage.jpg' backImageURL='/backimage.jpg' />
  )
  expect(component.toJSON()).toMatchSnapshot()
})

// test whether cardId is sent to each call back methods
// flip over state (className check?)
// CardImage test? or move to it's own file?