import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import PickCard from './PickCard'

it('matches last snapshot', () => {
  const component = ReactTestRenderer.create(<PickCard />)
  expect(component.toJSON()).toMatchSnapshot()
})
