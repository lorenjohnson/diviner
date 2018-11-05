import React, { Component } from 'react'
import PickCard from 'components/PickCard'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <PickCard />
        </header>
      </div>
    )
  }
}

export default App
