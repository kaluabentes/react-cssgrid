import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CardTag = ({ children }) => <h3 className={styles.tag}>{children}</h3>

CardTag.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardTag
