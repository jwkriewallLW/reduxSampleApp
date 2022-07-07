/* eslint-disable react/prop-types */
import React from "react";
import * as weatherActions from  '../../redux/actions/weatherActions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Button from '@mui/material/Button';
import { Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import styled from "styled-components";

// const StyledBox = styled.div`
//     margin: 10px;
//     padding: 10px;`;

class WeatherApi extends React.Component {

    constructor(props) {
        super(props);
    }

    renderWeather = (weather) =>{
        return(
            <li key={weather.name}>
                City Name: {weather.name} /
                Long: {weather.coord?.lon} /
                Lat: {weather.coord?.lat} /
                Temperature: {weather.main?.temp} /
                Description: {weather.weather[0]?.description}
            </li>
            //How can I access "weather[]" from this data?
        );
    }

    renderMySQLWeather = (weather) => {
        return(
        <li key={weather.cityId}>
            City Name: {weather.cityName} / 
            Country Abbr: {weather.countryAbbr} / 
            Lat: {weather.lat} / 
            Long: {weather.lon} / 
            Description: {weather.weather}
        </li>
        );
    }

    render() {
        return (
        
            <div>
                <Box m={2} p={2}>
                    <Button onClick={this.props.actions.fetchCatFact} variant="contained">Get Cat Fact</Button>
                    {this.props.weather.weather}
                </Box>
                    <Divider m={2} variant="middle" />
                <Box m={2} p={2}>
                    <Button m={2} onClick={this.props.actions.getAllWeatherData} variant="contained">Get Weather Data</Button>
                    {this.props.weather.allWeather.map(this.renderWeather)}
                </Box>
                    <Divider m={2} variant="middle" />
                <Box m={2} p={2}>
                    <Button m={2} onClick={this.props.actions.getIntellijApi} variant="contained">Get Local Api</Button>
                    {this.props.weather.intellij.map(this.renderMySQLWeather)}
                    <div>
                    <Button component={Link} to="/addweather"><AddCircleOutlineIcon/>Add Weather</Button>
                </div>
                </Box>
                    <Divider m={2} variant="middle" />
                <Box m={2} p={2}>
                </Box>
            </div>
        )
    }
}  

function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(weatherActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApi);