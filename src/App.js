import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {};
    this.getMyMedia = this.getMyMedia.bind(this);
    this.handleConnection = this.handleConnection.bind(this);
  }

  componentDidMount () {
    this.getMyMedia();
  }

  getMyMedia () {
    navigator.getUserMedia({
      audio: false,
      video: true
    }, (stream) => {
      this.setState({
        myVideo: URL.createObjectURL(stream)
      });
    }, () => {});
  }

  handleConnection () {
    this.props.chat.connect('RecycaScan')
  }
  render() {
    return (
      <div className="App">
        <video src={this.state.myVideo} muted autoPlay></video>
        <button className="btn btn-info" onClick={this.handleConnection}>Connect</button>
      </div>
    );
  }
}

export default App;
