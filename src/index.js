import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import withMouse from './WithMouse'
import './style.css'

const Quad1 = withMouse(Quadrant)
const Quad2 = withMouse(Quadrant)
const Quad3 = withMouse(Quadrant)
const Quad4 = withMouse(Quadrant)

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Quad1 bgcolor="#caf7e3" indicatorColor="#98ddca" />
        <Quad2 bgcolor="#ffd3b4" indicatorColor="#ffaaa7" />
        <Quad3 bgcolor="#a7c5eb" indicatorColor="#6886c5" />
        <Quad4 bgcolor="#faf0af" indicatorColor="#f6d186" />
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('root'))
