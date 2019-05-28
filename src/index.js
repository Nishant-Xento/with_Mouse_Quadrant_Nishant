import React from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import './style.css'

const App = () => (
  <div>
    <Quadrant bgColor="pink" positionIndicatorColor="red" />
    <Quadrant bgColor="rgb(102, 102, 102)" positionIndicatorColor="white" />
    <Quadrant bgColor="powderblue" positionIndicatorColor="blue" />
    <Quadrant bgColor="yellow" positionIndicatorColor="orange" />
  </div>
)

render(<App />, document.getElementById('root'))
