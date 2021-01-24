import React from "react";
import mobel from '../Images/mobel.png';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
      position: "absolute",
      marginTop:"49%",
      background: "none"
  },
  media: {
      height: 394.55,
      width: 811
  }
});

export default function Image() {
  const classes = useStyles();
    return (
      <Card className = { classes.root }>
      <CardActionArea>
      <CardMedia className = { classes.media }
      image = {mobel}
      title = "image"/>
      </CardActionArea>
      </Card> 
    );
}
