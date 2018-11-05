import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import Card from './Card'

it('matches last snapshot', () => {
  const component = ReactTestRenderer.create(<Card frontImageURL='/frontimage.jpg' backImageURL='/backimage.jpg' />)
  expect(component.toJSON()).toMatchSnapshot()
})
