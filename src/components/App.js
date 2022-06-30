import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';

import HomePage from './home/HomePage';
import WeatherApi from './weather/WeatherApi';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import TestPage from './testPage/TestPage';
import ManageCoursePage from './courses/ManageCoursePage';
import { makeStyles } from "@mui/styles";
import Layout from './common/Layout';
//import { title, layout } from './common/Layout'


const useStyles = makeStyles({
    title: {
        padding: 2, 
        variant: "h2",

    },
    layout: {
        height: "100%",
        minheight: "100%",
        width: "100%",
        
    }
})


function App() {
    const classes = useStyles();
    return (
            //<div className="container-fluid">
            <div className={ classes.layout }>
                <Header/>
                    <Layout>
                {/* Switch notation works like switch in java: check path until you find 
                endpoint that matches with pageNotFound being default. */}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={WeatherApi} />
                        <Route path="/courses" component={CoursesPage} />
                        <Route path="/testpage" component={TestPage} />
                        <Route path="/course/:slug" component={ManageCoursePage} />
                        <Route path="/course" component={ManageCoursePage} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Layout>
            </div>
    );
}


export default App;