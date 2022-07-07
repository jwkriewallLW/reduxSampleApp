import React, { useState } from "react";
import * as weatherActions from  '../../redux/actions/weatherActions';
import { Button, Divider, Link, TextField } from "@mui/material";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Box } from "@mui/system";


class AddNewWeatherForm extends React.Component {

    constructor(props) {
        super(props);
    }

handleChange = (e) => {
    let { name, value} = e.target;
    this.setState({...this.state, [name]: value})
    console.log(this.props)
    console.log(this.state)
}

handleSubmit = () => {
    //e.preventDefault();
    this.props.actions.addWeather(this.state)
}

render() {
    return ( 
        <div>
            <h2>Add Weather</h2>
            <form onSubmit={this.handleSubmit} >
                <input type="submit" />
                    <br/>
                    <Box m={2}>
                        <TextField
                            name="cityName"
                            id="outlined-textarea"
                            label="City Name"
                            placeholder=""
                            multiline
                            value={this.cityName}
                            onChange={this.handleChange}
                        />
                    </Box>
                    
                    <Box m={2}>
                        <TextField
                            name="countryAbbr"
                            id="outlined-textarea"
                            label="Country Abbreviation"
                            placeholder=""
                            multiline
                            value={this.countryAbbr}
                            onChange={this.handleChange}
                        />
                    </Box>
                    
                    <Box m={2}>
                        <TextField
                            name="lat"
                            id="outlined-textarea"
                            label="Latitude"
                            placeholder=""
                            multiline
                            value={this.lat}
                            onChange={this.handleChange}
                        />
                    </Box>
                   
                    <Box m={2}>
                        <TextField
                            name="lon"
                            id="outlined-textarea"
                            label="Longitude"
                            placeholder=""
                            multiline
                            value={this.lon}
                            onChange={this.handleChange}
                        />
                    </Box>
                    
                    <Box m={2}>
                        <TextField
                            name="weather"
                            id="outlined-textarea"
                            label="Weather"
                            placeholder=""
                            multiline
                            value={this.weather}
                            onChange={this.handleChange}
                        />
                    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWeatherForm);