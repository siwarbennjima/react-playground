import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person.js'



class App extends Component {
  state = {
    persons: [
      { name: "sywar", age: "22" },
      { name: "issal", age: "30" },
      { name: "rajeh", age: "28" }
    ]
  }
  switchNameHandler = () => {

    // console.log('was clicked')
    this.setState({
      persons: [
        { name: "marwa", age: "22" },
        { name: "issal", age: "30" },
        { name: "rajeh", age: "28" }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Hello react</h1>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          love music
         </Person>
      </div>
    )
  }

}


export default App
