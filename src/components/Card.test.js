import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import Card, { CardImage } from './Card'

const requiredProps = {
  frontImageURL: '/frontimage.jpg',
  backImageURL: '/backimage.jpg'
}

describe('Card', () => {
  it('renders with required props', () => {
    const component = ReactTestRenderer.create(
      <Card {...requiredProps} />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('sends id to all event callbacks', () => {
    const props = {
      ...requiredProps,
      cardId: 'testId',
      onClick: jest.fn(),
      onMouseOver: jest.fn(),
      onMouseOut: jest.fn()
    }
    const component = ReactTestRenderer.create(
      <Card {...props} />
    )

    component.getInstance().onClick()
    expect(props.onClick).toHaveBeenCalledWith(props.cardId)
    component.getInstance().onMouseOver()
    expect(props.onMouseOver).not.toHaveBeenCalled()
    component.getInstance().onMouseOut()
    expect(props.onMouseOut).toHaveBeenCalledWith(props.cardId)
  })

  it('renders correctly when face down', () => {
    const component = ReactTestRenderer.create(
      <Card {...requiredProps} />
    )

    component.getInstance().flipOver()
    expect(component.toJSON()).toMatchSnapshot()    
  })
})

test('CardImage', () => {
  const component = ReactTestRenderer.create(
    <CardImage imageURL={'/this-is-normal'} className={'expectedClassName'} />
  )

  expect(component.toJSON()).toMatchSnapshot()
})
