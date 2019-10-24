import React from 'react'
import PropTypes from 'prop-types'

import CardTag from '_atoms/card-tag'
import CardTitle from '_atoms/card-title'
import CardDescription from '_atoms/card-description'
import CardImage from '_atoms/card-image'

import styles from './styles.css'

const Card = ({ tag, title, description, imageSrc }) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <CardTag>{tag}</CardTag>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
    <CardImage src={imageSrc} alt={title} />
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
