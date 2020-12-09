/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0.8rem",
    marginTop: "2rem",
    width: "20rem",
  },
  text: {
    fontFamily: "Karla",
    fontWeight: 700,
    textTransform: "none",
  },
}))

const ActionButton = ({ startIcon, endIcon, link, buttonText }) => {
  const classes = useStyles()
  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="primary"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      href={link}
      target="_blank"
    >
      <Typography className={classes.text} variant="subtitle1" color="inherit">
        {buttonText}
      </Typography>
    </Button>
  )
}

export default ActionButton
