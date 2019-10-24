import React from 'react'
import PropTypes from 'prop-types'

import Container from '_atoms/container'

import styles from './styles.css'

const CardGrid = ({ children }) => (
  <Container>
    <div className={styles.grid}>{children}</div>
  </Container>
)

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardGrid
