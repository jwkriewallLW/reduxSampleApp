import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../redux/actions/counterAction';
import { bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';

class TestPage extends React.Component {

  constructor(props) {
    super(props);
  }

  increment = () =>{
    this.props.actions.buttonPlus();
  }


  decrement = () => {
    this.props.actions.buttonMinus();
  }

  render() {
    return (
      <Box>
        <Typography variant="h3" textAlign="center" padding={2}>Counter</Typography>
      
          <Grid container justifyContent="center" alignItems="center">
   
            <Button 
              sx={{m:4, fontSize:40, minWidth:80, minHeight:80, maxWidth:80, maxHeight:80}} 
              variant="contained"
              color="error"
              onClick={ this.decrement }>-</Button>
                
               <Typography variant="h1">{this.props.count}</Typography>
               
            <Button 
              sx={{m:4, fontSize:40, minWidth:80, minHeight:80, maxWidth:80, maxHeight:80 }} 
              variant="contained"
              color="success"
              onClick={this.increment}>+</Button>
          </Grid>
       
     </Box>
    )
  }
}

function mapStateToProps(state) { 
  console.log("State.counter.count from mapState: " + state.counter.count);
  console.log("this.state from mapState: " + state)
 
  return { 
    count: state.counter.count
  };
}

TestPage.propTypes = {
    actions: PropTypes.object.isRequired,
    //count: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
}
// mapDispatchToProps is how you bind your actions to your components.

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);

// export default connect(mapStateToProps)(TestPage);
// // connect hooks to redux, pulls ENTIRE STATE and passes it to mapStateToProps function provided. 
// // https://daveceddia.com/how-does-redux-work/