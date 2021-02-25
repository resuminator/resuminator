import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    buttonText: {
        color: theme.palette.grey[900],
        fontSize: "0.9rem",
        fontFamily: "Karla",
        textTransform: "none",
        padding: "0rem 0 1rem 0",
        cursor: "pointer",
      },
}))

const ForgotPasswordText = () => {
    const classes = useStyles();
    return (
        <Link href="/resetpassword">
          <Typography variant="subtitle2" className={classes.buttonText}>
            Forgot Password?
          </Typography>
        </Link>
    )
}

export default ForgotPasswordText
