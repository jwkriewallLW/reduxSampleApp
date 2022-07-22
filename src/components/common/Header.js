import styled from '@emotion/styled';
import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BUTTON_COLOR, BUTTON_HOVER_COLOR } from '../../colorScheme';

const Button1 = styled(Button)({
    color: BUTTON_COLOR,
    '&:hover': { color: BUTTON_HOVER_COLOR }
    
})

const Header = () => {

    return (
        
            <AppBar position="sticky">        
                <Toolbar>
                    <ButtonGroup variant="text" display="flex" aria-label="text button group">
                            
                            <Button1 component={Link} to="/"><HomeOutlinedIcon/></Button1>
                            <Button1 component={Link} to="/weatherapi">Weather API</Button1>
                            <Button1 component={Link} to="/addweather">Add Weather</Button1>
                            {/* <Button1 component={Link} to="/updateweather/:id">Edit Weather</Button1> */}
                            {/*<Button1 component={Link} to="/courses">Courses</Button1>*/}
                            <Button1 component={Link} to="/testpage">Test Page</Button1>
                            
                        
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
    );
}

export default Header;