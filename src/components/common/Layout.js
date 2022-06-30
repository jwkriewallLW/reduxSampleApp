import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import React from 'react'

const useStyles = makeStyles({
    page: {
        background: 'rgb(220, 245, 209)',
    }, 
    body: {
        height: "100vh",
        width: "100vw"
    },
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

export default function Layout({ children }) {
    const classes = useStyles()
    return (
        <div>
            <div className={ classes.page }>
                { children }
            </div>
        </div>
    )
}