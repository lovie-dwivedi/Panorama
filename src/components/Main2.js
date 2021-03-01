import React from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1
      marginTop:"8px"
    },
    paper: {
      //padding: theme.spacing(2),
      //backgroundColor:  "#272b48",
      backgroundColor:  "#111328",
      border:"1 px solid #a5a4a6"
      //margin: 'auto',
      //maxWidth: 640,
    },
    image: {
      width: 50,
      height: 60,
      backgroundColor: "#a5a4a6"
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
        //marginTop:"-10px"
        //color: "white"
      }
  }));
  
  export default function ComplexGrid() {
    const classes = useStyles();
  
    const data = [
      {
          "Name":"1.Akhil Jain",
          "count": 110,
      },
      {
          "Name":"2.Pravesh Garg",
          "count": 11,
      },
      {
          "Name":"3.Pravesh Garg",
          "count": 11,
      },
      {
          "Name":"4.Sumit Kumar",
          "count": 2,
      },
      {
          "Name":"5.Jogender Yadav",
          "count": 1,
      },
  ]

    return (
      <>
      <br/>
      <div style={{color:"#343774",fontSize:"20px"}}>All Users</div>
      <br/>
      {data.map((item) => (
      <div className={classes.root}>
          <Grid container spacing={2} className={classes.paper}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <Box className={classes.img} ></Box>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <div gutterBottom variant="subtitle1" className={classes.headingColor}>
                    {item.Name}
                    <div className={classes.countColor}>{item.count}</div>
                  </div><br/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr/>
      </div>
      ))}
      </>
    );
  }
  