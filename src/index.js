import React from 'react'
import { render } from 'react-dom'
import PositionIndicator from './PositionIndicator'
import './style.css'

class App extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div className="movement-container" onMouseMove={this.handleMouseMove}>
        <p>Move your mouse around the page to see something cool!</p>
        <PositionIndicator {...this.state} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
