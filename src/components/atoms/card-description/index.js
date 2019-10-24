import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CardDescription = ({ children }) => <h3 className={styles.description}>{children}</h3>

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardDescription
