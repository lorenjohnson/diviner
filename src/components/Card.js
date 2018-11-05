import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default class Card extends Component {
  static propTypes = {
    frontImageURL: PropTypes.string.isRequired,
    backImageURL: PropTypes.string.isRequired,
    name: PropTypes.string,
    onClick: PropTypes.func
  }

  state = {
    faceDown: false
  }

  flipOver = faceDown => this.setState({faceDown: !faceDown})

  render() {
    const { name, frontImageURL, backImageURL } = this.props
    const { faceDown } = this.state
    const onClick = this.props.onClick
      ? this.props.onClick
      : () => this.flipOver(faceDown)

    return (
      <div className='card' onClick={onClick}>
        <div className={['card-front', faceDown ? 'hidden-side' : ''].join(' ')}>
          <img src={frontImageURL} alt={name} />
        </div>
        <div className={['card-back', !faceDown ? 'hidden-side' : ''].join(' ')}>
          <img src={backImageURL} alt='cardBack' />
        </div>
      </div>
    )
  }
}
