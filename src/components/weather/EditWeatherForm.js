import React from "react";
import * as weatherActions from  '../../redux/actions/weatherActions';
import { Button, TextField } from "@mui/material";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Box } from "@mui/system";

class EditWeatherForm extends React.Component {

    constructor(props) {
        super(props);
        const { id } = props.match.params;
        this.state = {
            id
        };
    }

handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({...this.state, [name]: value})   
}

    update = () => {
    this.props.actions.updateSingleWeather(this.state, this.state.id)
    history.pushState(this.state, '', "http://localhost:3000/weatherapi")
}

render() {
    return (
        <div>
            
            <h2>Edit Weather</h2>
            <form onSubmit={this.update} >
                    <br/>
                    <Box m={2}>
                        <TextField
                            name="cityName"
                            id="outlined-textarea"
                            label={"City Name"}
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

                    <Button
                        sx={{margin:2}}
                        type="submit"
                        variant="contained"
                        color="secondary">
                        Submit Edit
                    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWeatherForm);