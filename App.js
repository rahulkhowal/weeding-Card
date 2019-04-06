import React, { Component } from 'react';
import Navbar from './Component/Navbar';
//import { BrowserRouter } from 'react-router-dom'
//import Layout from './layout'
//import Button from './@material-ui/core'
import CardNew from './Component/Card'
import Form from './Component/Form'
//import './Component/pic.jpg'

class App extends Component {
  state = {
    BrideName: "Anarkali",
    GroomName: "Salim",
    Venue: "Agra",
    Date: "16 / 04 / 2019",
    Photo: 'https://www.gstatic.com/webp/gallery3/1.png'
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //const R = e.target.BrideName.value
    //console.log(R)
    this.setState({
      BrideName: e.target.BrideName.value,
      GroomName: e.target.GroomName.value,
      Venue: e.target.Venue.value,
      Date: e.target.Date.value,
      Photo: e.target.Photo.value
    });
  }
  render() {
    return (

      <div className="App">

        <Navbar />
        <CardNew BrideName={this.state.BrideName} GroomName={this.state.GroomName} Venue={this.state.Venue} Date={this.state.Date} Photo={this.state.photo} />
        <Form getCard={this.handleSubmit} />
      </div>


    );
  }
}

export default App;
