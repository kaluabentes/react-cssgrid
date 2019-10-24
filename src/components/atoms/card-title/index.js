import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CardTitle = ({ children }) => <h2 className={styles.title}>{children}</h2>

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardTitle
