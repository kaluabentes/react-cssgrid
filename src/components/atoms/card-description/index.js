import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CardDescription = ({ children }) => <p className={styles.description}>{children}</p>

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardDescription
