import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Card.css'

export default class Card extends Component {
  static propTypes = {
    cardId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    frontImageURL: PropTypes.string.isRequired,
    backImageURL: PropTypes.string.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func
  }

  state = {
    faceDown: true
  }

  flipOver = () => this.setState(state => ({ faceDown: !state.faceDown }))

  onClick = () => this.props.onClick
    ? this.props.onClick(this.props.cardId)
    : this.flipOver(this.state.faceDown)

  onMouseOver = () => this.props.onMouseOver && !this.state.faceDown
    ? this.props.onMouseOver(this.props.cardId)
    : undefined

  onMouseOut = () => this.props.onMouseOut
    ? this.props.onMouseOut(this.props.cardId)
    : undefined

  render () {
    const { frontImageURL, backImageURL, reversed, className } = this.props
    const { faceDown } = this.state

    return (
      <div className={classNames(className, 'card', { 'face-down': faceDown, reversed })}
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        <CardImage className='card-back' imageURL={backImageURL} />
        <CardImage className='card-front' imageURL={frontImageURL} />
      </div>
    )
  }
}

export function CardImage ({ imageURL, className }) {
  return <div className={className}>
    <img src={imageURL} alt={imageURL} />
  </div>
}
