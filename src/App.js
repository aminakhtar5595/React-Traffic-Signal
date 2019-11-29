import React, { Component } from 'react';
import './App.css';
import { Header } from "./components/Header";


class App extends Component {

  constructor(props) {
  super(props);
    this.state = {
      counter: 60,
      msg: <img src="./no-lights.png" alt="Traffic Lights" className="signal-image" />,
      video_url: "./traffic_video.mp4"
    }
  }

  componentDidMount() {
    this.app_timer = setInterval(() => {
      if (this.state.counter <= 0) {
        clearInterval(this.app_timer);
        this.setState({
          msg: this.state.msg
        }); 
      } 
      
      else {
        this.setState((prevState) => ({counter: prevState.counter - 1})); 
      }
      
      if (this.state.counter < 10) {
        this.setState({
          counter: "0"+ parseInt(this.state.counter)
        })
      }
    }, 1000);

    this.msg_timer();
    this.second_msg_timer();
    this.third_msg_timer();
    this.fourth_msg_timer();
  }



  componentWillUnmount() {
    clearInterval(this.app_timer);
  }

  msg_timer = () => {
    setTimeout(() => {
      console.log('Red light');
      this.setState({
        msg: <img src="./red_light.png" alt="Red Light" />
      })
    }, 5000)
  }

  second_msg_timer = () => {
    setTimeout(() => {
      console.log('Yellow light');
      this.setState({
        msg: <img src="./yellow_light.png" alt="Yellow Light" />
      })
    }, 20000)
  }

  third_msg_timer = () => {
    setTimeout(() => {
      console.log('Green light');
      this.setState({
        msg: <img src="./green_light.png" alt="Green Light" />
      })
    }, 30000)
  }

  fourth_msg_timer = () => {
    setTimeout(() => {
      console.log('Red light');
      this.setState({
        msg: <img src="./red_light.png" alt="Red Light" />
      })
    }, 60000)
  }

  
render() {  
  return (
    <div className="App">
      <Header/>
      <h3 className="counter-link">00 : 00 : {this.state.counter}</h3>
      <div className="app-image">
      <h4 id="app-img">{this.state.msg}</h4>

      <video id="background-video" autoPlay>
      <source src={this.state.video_url} type="video/mp4" />
      <source src={this.state.video_url} type="video/ogg" />
      </video>
      </div>

    </div>
  );
}
}

export default App;
