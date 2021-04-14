import React from 'react'
import PropTypes from 'prop-types'

const PositionIndicator = ({ color, x, y }) => (
  <div
    style={{
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      backgroundColor: color,
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      transform: 'translate(-50%, -50%)'
    }}
  />
)

PositionIndicator.propTypes = {
  color: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
}

PositionIndicator.defaultProps = {
  color: 'red'
}

export default PositionIndicator
