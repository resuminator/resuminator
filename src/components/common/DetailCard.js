import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        width: "26rem",
        padding: "1rem",
        paddingBottom: "2rem",
        margin: "1rem",
        marginLeft: "0rem",
        borderRadius: "1rem",
    }
}))

const DetailCard = ({item, onClick}) => {
    const classes = useStyles();
    return (
        <Paper onClick={onClick} className={classes.root}>
            <Typography variant="body1">{item.company}</Typography>
        </Paper>
    )
}

export default DetailCard
