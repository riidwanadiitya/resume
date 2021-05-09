import React, { Component } from 'react'
import Brand from './components/Brand'
import Navigation from './components/Navigation'

export class App extends Component {
  render() {
    return (
      <div>
        <Brand />
        <Navigation />
      </div>
    )
  }
}

export default App
