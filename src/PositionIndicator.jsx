import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

class PositionIndicator extends React.Component {
  render() {
    const { topPos, leftPos } = this.props
    return (
      <Fragment>
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: this.props.positionIndicatorColor,
            top: topPos + 'px',
            left: leftPos + 'px',
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </Fragment>
    )
  }
}

PositionIndicator.propTypes = {
  topPos: PropTypes.number.isRequired,
  leftPos: PropTypes.number.isRequired
}

export default PositionIndicator
