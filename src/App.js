import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'F',
      temperature: 301
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Campsite React Shuns</h1>
        </header>
        <div className="content">
          <div className="temperature">
            <kws-temperature
              temperature={this.state.temperature}
              scale={this.state.scale}
              onClick={() =>
                this.setState({
                  scale: this.state.scale === 'C' ? 'F' : 'C',
                  temperature: this.state.temperature
                })
              }
            />
          </div>
          <h2>What did you think of our campsite? Let us know...</h2>
          <h3>Recent Reviews</h3>
          <ul>
            <li>That Campsite Rocked!!</li>
            <li>I loved it and want s'more!!</li>
            <li>
              I was there in April and it rained. Why can't you prevent that?
            </li>
            <li>Bacon!! Everyone loves bacon! (well, almost everyone)</li>
          </ul>
          <button>Add Your Review</button>
        </div>
      </div>
    );
  }
}

export default App;
