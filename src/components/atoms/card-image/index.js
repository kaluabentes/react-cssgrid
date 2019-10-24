import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CardImage = ({ src, alt }) => <img className={styles.image} src={src} alt={alt} />

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default CardImage
