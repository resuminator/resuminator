import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        width: "26rem",
        padding: "1rem",
        paddingBottom: "2rem",
        margin: "0.5rem",
        marginLeft: "0rem",
        borderRadius: "1rem",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.contrast.light
    },
    title: {
        fontWeight: 500,
        fontSize: "1rem",
    },
    subtitle: {
        fontSize: "0.9rem",
        color: theme.palette.text.secondary
    }
}))

const DetailCard = ({item, onClick}) => {
    const classes = useStyles();
    return (
        <Paper elevation={2} onClick={onClick} className={classes.root}>
            <Typography variant="body1" className={classes.title}>{item.company || "Click to add company info"}</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>{item.jobTitle || "Add Job Title"}</Typography>
        </Paper>
    )
}

export default DetailCard
