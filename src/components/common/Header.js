import styled from '@emotion/styled';
import { AppBar, Button, ButtonGroup, Grid, Toolbar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Button1 = styled(Button)({
    color:"white",
    '&:hover': { color: "#000000" }
    
})

const Header = () => {

    return (
        
            <AppBar position="sticky">        
                <Toolbar>
                    <ButtonGroup variant="text" display="flex" aria-label="text button group">
                            
                            <Button1 component={Link} to="/"><HomeOutlinedIcon/></Button1>
                            <Button1 component={Link} to="/about">Weather API</Button1>
                            {/*<Button1 component={Link} to="/courses">Courses</Button1>*/}
                            <Button1 component={Link} to="/testpage">Test Page</Button1>
                        
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
    );
}

export default Header;