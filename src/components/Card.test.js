import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import Card from './Card'

// TODO: 
// Show cardId is sent through each callback method
// flipOver function state change and render check
// Snapshot CardImage and/or move to it's own file

it('matches last snapshot', () => {
  const component = ReactTestRenderer.create(
    <Card frontImageURL='/frontimage.jpg' backImageURL='/backimage.jpg' />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
