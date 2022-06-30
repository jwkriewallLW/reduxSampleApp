/* eslint-disable react/prop-types */
import React from "react";
import * as weatherActions from  '../../redux/actions/weatherActions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
//import styled from "@emotion/styled";

// const StyledBox = styled(Box)({
//     margin: 2,
//     padding: 2
// })

class WeatherApi extends React.Component {

    constructor(props) {
        super(props);
    }

    renderWeather = (weather) =>{
        return(
            <li key={weather.name}>
                City Name: {weather.name} /
                Long: {weather.coord.lon} /
                Lat: {weather.coord.lat} /
                Temperature: {weather.main.temp} /
                Description: {weather.weather.description}
            </li>
            //How can I access "weather[]" from this data?
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
                <form>
                    
                </form>
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