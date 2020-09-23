import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    image: '',
    title: ''
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://meme-api.herokuapp.com/gimme')
      .then((response) => {
        const { url, title } = response.data;
        this.setState({ image: url, title })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <img src={this.state.image} alt={this.state.title} style={{ width: '100%', height: '97%' }} />
        </div>
        <br />
        <button className="button" onClick={this.fetchAdvice}>
          <span>GIVE ME MEME!</span>
        </button>
      </div>
    );
  }
}

export default App;