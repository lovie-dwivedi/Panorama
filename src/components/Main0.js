import React from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    border: {
      border: "1 px solid white"
    },
    root1: {
      '& > *': {
        margin: theme.spacing(1),
        width: '33ch',
        height:'5ch',
        backgroundColor:"#a5a4a6",
        color:"white"
        //marginBottom:"10px"
      },
    },
    paper: {
      //padding: theme.spacing(2),
      paddingTop: "10px",
      paddingLeft:"10px",
      backgroundColor:  "#111328",
      marginBottom:"-15px",
      //border:"1 px solid green"
      //margin: 'auto',
      //maxWidth: 500,
    },
    image: {
      width: 64,
      height: 64,
    },
    img: {
      //margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    headingColor: {
        color: "#a5a4a6",
        //color: "white"
      },
    countColor: {
        color: "yellow",
        fontSize:"30px",
        marginTop:"-10px"
        //color: "white"
      }
  }));
  
  export default function Main0() {
    const classes = useStyles();
  
    const data = [
        {
          "Heading":"1.Simple Security Collateral",
          "count": 146,
        },
        {
            "Heading":"2.BRAVO Surveillance",
            "count": 72,
        },
        {
            "Heading":"3.Sensitivity Viewer",
            "count": 45,
        },
        {
            "Heading":"4.Macro housing charts",
            "count": 38,
        },
        {
            "Heading":"5.Bravo utilities",
            "count": 20,
        },
    ]
    
    console.log(data)
    return (
    <>
    <form className={classes.root1} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Type Here To Search" variant="filled"  color="primary"
      helperText="Full width!"
      InputLabelProps={{
        shrink: true,
      }}
      />
    </form>
    {data.map((item) => (
      <div className={classes.root}>
        <Paper className={classes.paper} square variant="outlined" elevation={3}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="business-graph-with-gold-dollar-sign-vector-1807573.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" className={classes.headingColor}>
                    {item.Heading}
                    <div className={classes.countColor}>{item.count}</div>
                  </Typography><br/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <hr/>
      </div>
      ))}
     </>
    );
  }
  