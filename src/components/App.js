import React from 'react'
import GifListContainer from '../containers/GifListContainer.js'
import NavBar from './NavBar.js'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
