import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore"
import { Provider as ReduxProvider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';


const store = configureStore();

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32"
    },
    secondary :{
      main: "#66bb6a"
    },
    customColor: {
        main: "#faf"
    },
    textDark: {
        main: "#000000"
    },
    textLight: {
        main: "#f9fbe7"
    },
    textAlt: {
        main: "#66bb6a"
    },
  },
  
});

render(
    <ReduxProvider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Router>
    </ReduxProvider>, 
    document.getElementById("app")
);