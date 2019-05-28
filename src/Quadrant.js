import React, { Fragment } from 'react'
import withMouse from './withMouse'
import PositionIndicator from './PositionIndicator'
import PropTypes from 'prop-types'

class Quadrant extends React.Component {
  render() {
    const quadrantDiv = {
      backgroundColor: this.props.bgColor,
      height: '50vh',
      width: '50vw',
      float: 'left',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
    const coordinateStyle = {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      textAlign: 'center',
      display: 'block'
    }
    return (
      <Fragment>
        <div style={quadrantDiv} onMouseMove={this.props.handlemousemove}>
          <PositionIndicator
            positionIndicatorColor={this.props.positionIndicatorColor}
            topPos={this.props.topPos}
            leftPos={this.props.leftPos}
          />
          <span style={coordinateStyle}>
            Coordinates:
            <br /> x: {this.props.topPos}, y: {this.props.leftPos}
          </span>
        </div>
      </Fragment>
    )
  }
}

Quadrant.protoTypes = {
  topPos: PropTypes.number,
  leftPos: PropTypes.number
}

export default withMouse(Quadrant)
