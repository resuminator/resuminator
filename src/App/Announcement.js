import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: "#fffafa",
        padding: "0.5rem 0"
    },
    link: {
        color: "inherit"
    }
}))

const Announcement = () => {
    const classes = useStyles();

    return (
        <Box width="100%" zIndex="1000" position="sticky" top="0" left="0" textAlign="center" className={classes.root}>
            <Typography>This version of Resuminator is going away on 30th September 2021. <a href="https://resuminator.in/signup" className={classes.link}>Switch to Version 2</a> to continue using Resumintor</Typography>
        </Box>
    )
}

export default Announcement
