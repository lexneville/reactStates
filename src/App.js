import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    names: ["John", "Holly", "Vicky"],
    petName: "..."
  }

  changeNames = () => {
    this.setState({
      names: ["Peter", "Arthur", "Ann"],
    })
  }

  getPetName = (event) => {
    this.setState({
      petName: event.target.value
    })
  }

  render() {
    const nameList = this.state.names.map((name) => {
      return <h1>My name is {name}</h1>
    })
    return (
      <div>
        {nameList}
        <div>
          <h2>Your pet name is {this.state.petName}</h2>
          <input onChange={this.getPetName} type="text" />
        </div>
          <button onClick={this.changeNames} className="nameChangeButton">Change Names</button>
      </div>
    )
  }

}


export default App;
