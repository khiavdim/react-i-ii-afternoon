import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import MainContent from './MainContent'


class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  )
}
}

export default App;