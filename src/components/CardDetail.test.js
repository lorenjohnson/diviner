import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { SAMPLE_CARD } from 'util/deck'
import CardDetail from './CardDetail'

it('matches last snapshot', () => {
  const component = ReactTestRenderer.create(
    <CardDetail card={SAMPLE_CARD} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
