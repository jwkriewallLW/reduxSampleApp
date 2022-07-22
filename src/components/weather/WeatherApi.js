/* eslint-disable react/prop-types */
import React from "react";
import * as weatherActions from  '../../redux/actions/weatherActions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Button from '@mui/material/Button';
import { Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useHistory, useParams } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
//import styled from "styled-components";

// const StyledBox = styled.div`
//     margin: 10px;
//     padding: 10px;`;

class WeatherApi extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    

    // useEffect = () => {
    //     debugger;
    //     if(this.weather == undefined | null) {
    //         this.props.actions.fetchCatFact();
    //     }
    //     else {
    //         return null;
    //     }
    //     console.log(this.props);
    // };
  

    handleEdit = (weather) => {
        this.props.actions.getSingleWeather(weather.cityId);
        history.pushState(this.state, '', `http://localhost:3000/updateweather/${weather.cityId}`)
    }

    renderWeather = (weather) =>{
        return(<div key={weather?.name}>
            <li >
                City Name: {weather.name} /
                Long: {weather.coord?.lon} /
                Lat: {weather.coord?.lat} /
                Temperature: {weather.main?.temp} /
                Description: {weather.weather[0]?.description}
            </li>
           
            </div>
        );
    }

    renderMySQLWeather = (weather) => {
        
        return(<div key={weather.cityId}>
        <li >
            City Name: {weather.cityName} / 
            Country Abbr: {weather.countryAbbr} / 
            Lat: {weather?.lat} / 
            Long: {weather?.lon} / 
            Description: {weather.weather}
        
        <Button
        onClick={() => this.props.actions.deleteOneWeather(weather.cityId)}>
            <DeleteRoundedIcon/>
        </Button>
        <Button component={Link} to={`/updateweather/${weather.cityId}`}>
            EDIT
        </Button>
        </li>
        </div>
        );
    }

      renderTopTenWeather = (weather) => {
            

        return(<div key={weather.cityName}>
            <li >
                City Name: {weather.cityName} / 
                Country Abbr: {weather.countryAbbr} /  
                Description: {weather.weather}
            
            </li>
        </div>
        );
    }

    //onClick={() => this.handleEdit(weather)}

    // showWeatherProps = () => {
    //     const weather = this.props.weather
    //     return weather;
    // }

    render() {
        const {weather} = this.props;
        const {fetchCatFact, getAllWeatherData, getIntellijApi} = this.props.actions;
        return (
            
        
            <div>
                <Box m={2} p={2}>
                    <Button onClick={fetchCatFact} variant="contained">Get Cat Fact</Button>
                    {weather.weather}
                </Box>
                {/* <Box m={2} p={2}>
                    <Typography variant="h2" gutterBottom component="div" {this.props.actions.fetchCatFact}>
                        {this.props.weather.weather}
                    </Typography>
                </Box> */}
                {/* <div {this.props.actions.fetchCatFact}>
                    {this.props.weather.weather}
                </div> */}
                    <Divider m={2} variant="middle" />
                <Box m={2} p={2}>
                    <Button m={2} onClick={getAllWeatherData} variant="contained">Get Weather Data</Button>
                    {weather.allWeather.map(this.renderWeather)}
                </Box>
                    <Divider m={2} variant="middle" />
                <Box m={2} p={2}>
                    <Button m={2} onClick={getIntellijApi} variant="contained">Get Local Api</Button>
                    {weather.intellij.map(this.renderMySQLWeather)}
                    <div>
                        <Button component={Link} to="/addweather"><AddCircleOutlineIcon/>Add Weather</Button>
                    </div>
                </Box>
                    <Divider m={2} variant="middle" />

                <Box m={2} p={2}>
                    <Button onClick={this.props.actions.getTopTenWeather} variant="contained">Get Top 10 Weather</Button>
                    {weather.topten.map(this.renderTopTenWeather)}
                </Box>
                    <Divider m={2} variant="middle" />

            </div>
        )
    }
}  

// function Data(props: weather) {
//     //useEffect / render
// }


function mapStateToProps(state) {
    // const {weather} = this.props;
    // const {fetchCatFact, getAllWeatherData, getIntellijApi} = this.props.actions;
    //const weather = state.weather
    return { weather: state.weather};
    
}

// function mapStateToProps(state) {
//     return state;
// }
// What's the difference?

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(weatherActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApi);