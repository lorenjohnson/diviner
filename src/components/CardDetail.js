import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CARD_PROP_TYPE } from 'util/deck'

export default function CardDetail ({ card, className }) {
  return <div className={classNames(className)}>
    <h1>{card.name}</h1>
    <p>{card.desc}</p>
    <h2>Meaning</h2>
    <p>{card.meaningLong}</p>
  </div>
}

CardDetail.propTypes = {
  card: CARD_PROP_TYPE.isRequired,
  className: PropTypes.string
}
