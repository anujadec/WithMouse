import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

export default function WithMouse(Component) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    offset = {
      x: 0,
      y: 0
    }
    displayName = `withMouse(${getDisplayName(Component)})`
    setOffset = () => {
      const rect = this.node.firstChild.getBoundingClientRect()
      this.offset = {
        x: Math.round(rect.left),
        y: Math.round(rect.top)
      }
    }
    componentDidMount() {
      this.setOffset()
      window.addEventListener('resize', this.setOffset)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.setOffset)
    }
    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX - this.offset.x,
        y: e.clientY - this.offset.y
      })
    }
    render() {
      return (
        <span
          onMouseMove={this.handleMouseMove}
          ref={(node) => (this.node = node)}
        >
          <Component {...this.props} mouse={this.state} />
        </span>
      )
    }
  }
  hoistStatics(Mouse, Component)
  return Mouse
}
