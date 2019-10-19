import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios";

const ImgCloud = styled.img `
width: 8vh;
height:5vh;

`
export class ClimaHoje extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          max_temp: "",
          min_temp: "",
          humidity: "",
          pressaoAtmosferica: "",
          estadoTempo: "",
          ventoDirecao: ""
        };
      }
  
componentDidMount (){
    this.TempMax ();
    this.TempMin();
    this.Umidade();
    this.pressaoAtmosferica();
    this.estadoTempo();
}
TempMax = () => {
  const max = { 
    max_temp: this.state.max_temp
    }
    axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/')
      
    .then((res) => {
          this.setState({
            max_temp: res.data.consolidated_weather[0].max_temp
          })
          console.log(res.data.consolidated_weather[0].max_temp)          
          })         
}

TempMin = () => {
    const min = { 
      min_temp: this.state.min_temp
      }
      axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/')
        
      .then((res) => {
            this.setState({
              min_temp: res.data.consolidated_weather[0].min_temp
            })
            console.log(res.data.consolidated_weather[0].min_temp)          
            })          
  }

  Umidade = () => {
    const humidity = { 
      humidity: this.state.humidity
      }
      axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/')
        
      .then((res) => {
            this.setState({
                humidity: res.data.consolidated_weather[0].humidity
            })
            console.log(res.data.consolidated_weather[0].humidity)          
            })         
  }

  pressaoAtmosferica = () => {
    const pressaoAtmosferica = { 
        pressaoAtmosferica: this.state.humidity
      }
      axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/')
        
      .then((res) => {
            this.setState({
                pressaoAtmosferica: res.data.consolidated_weather[0].air_pressure
            })
            console.log(res.data.consolidated_weather[0].air_pressure)          
            })         
  }

  estadoTempo = () => {
    const estadoTempo = { 
        estadoTempo: this.state.weather_state_name
      }
      axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/')
        
      .then((res) => {
            this.setState({
                estadoTempo: res.data.consolidated_weather[0].weather_state_name
            })
            console.log(res.data.consolidated_weather[0].weather_state_name )        
            })         
  }

  render (){
    return (
    <div>
        <h3>Clima em Salvador</h3>
        <p> Temperatura máxima: {this.state.max_temp}</p>
        <p> Temperatura mínima: {this.state.min_temp}</p>
        <p> Umidade: {this.state.humidity}</p>
        <p> Pressão Atmosférica: {this.state.pressaoAtmosferica}</p>
        <p> Céu: {this.state.estadoTempo} <ImgCloud src="https://www.metaweather.com/static/img/weather/hc.svg"/></p>
       
    </div>
   )}
  
}
//<p>{this.ClimaHojeCidade()}</p>

//[{"title":"Salvador","location_type":"City","woeid":455826,"latt_long":"-12.97002,-38.504559"}]