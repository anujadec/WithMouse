import React from 'react'
import PropTypes from 'prop-types'

const PositionIndicator = ({ x, y }) => (
  <div
    style={{
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      backgroundColor: 'red',
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`
    }}
  />
)

PositionIndicator.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default PositionIndicator
