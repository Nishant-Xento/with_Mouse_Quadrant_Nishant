import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

const withMouse = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor() {
      super()
      this.handleMouseMove = this.handleMouseMove.bind(this)
      this.setOffset = this.setOffset.bind(this)
    }
    state = {
      leftPos: 10,
      topPos: 10
    }
    componentDidMount() {
      this.setOffset()
      window.addEventListener('resize', this.setOffset)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.setOffset)
    }
    setOffset = () => {
      const rect = this.node.firstChild.getBoundingClientRect()
      this.offset = {
        x: Math.floor(rect.left),
        y: Math.floor(rect.top)
      }
    }

    handleMouseMove = event => {
      var x = event.clientX
      var y = event.clientY
      this.setState({
        leftPos: x - this.offset.x,
        topPos: y - this.offset.y
      })
    }
    render() {
      return (
        <span
          ref={node => {
            this.node = node
          }}
        >
          <OriginalComponent
            bgColor={this.props.bgColor}
            positionIndicatorColor={this.props.positionIndicatorColor}
            topPos={this.state.topPos}
            leftPos={this.state.leftPos}
            handlemousemove={this.handleMouseMove}
          />
        </span>
      )
    }
  }
  hoistStatics(withMouse, OriginalComponent)
  return NewComponent
}

export default withMouse
