import React from 'react'
import PositionIndicator from './PositionIndicator'
import PropTypes from 'prop-types'

const Quadrant = ({ bgcolor, indicatorColor, mouse }) => (
  <div
    style={{
      height: '50vh',
      width: '50vw',
      backgroundColor: bgcolor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      float: 'left'
    }}
  >
    <span>
      {`X: ${mouse.x}`}
      <br />
      {`Y: ${mouse.y}`}
    </span>
    <PositionIndicator color={indicatorColor} {...mouse} />
  </div>
)

Quadrant.propTypes = {
  bgcolor: PropTypes.string,
  indicatorColor: PropTypes.string,
  mouse: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
}
export default Quadrant
