import { makeStyles } from "@mui/styles";
import React from 'react'
import { BACKGROUND_COLOR } from "../../colorScheme";

const useStyles = makeStyles({
    page: {
        background: BACKGROUND_COLOR,
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