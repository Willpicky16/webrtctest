import React, { Component } from 'react';
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
      window.localStream = stream;
    }, () => {});
  }

  handleConnection () {
    this.props.chat.connect('Phil')
  }
  render() {
    return (
      <div className="App">
        <video src={this.state.myVideo} muted autoPlay></video>
        <button className="btn btn-info" onClick={this.handleConnection}>Connect</button>
        {this.props.chat.calls.map(call => {
          return <video src={call.stream} muted autoPlay></video>
        })}
      </div>
    );
  }
}

export default App;
