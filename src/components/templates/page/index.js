import React from 'react'
import PropTypes from 'prop-types'

import '_styles/base.css'

const Page = ({ children }) => <main>{children}</main>

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
