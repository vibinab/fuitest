import React from 'react'
import Grid from '@mui/material/Grid';
import coin from "../images/coinmarket-2.png"
import market from "../images/New-Market1.png" 
import yahoo from "../images/New-Yahoo1.png" 
import business from "../images/B2C-Logo-2.png"
import AP from "../images/AP-new1.png"
import Reader from "../images/Readers-02.png"
import "./CardIcons.css"


export const CardIcons = () => {
  return (
    <>
    <div className='cardmain'>
<Grid container spacing={2}>
    <Grid item sm={12} md={2}>
       <center><img src={coin} className="iconimage"></img></center> 
    </Grid>
    <Grid item sm={12} md={2}>
    <center><img src={market}  className="iconimage"></img></center>
</Grid>
<Grid item sm={12} md={2} >
<center><img src={yahoo}  className="iconimage"></img></center>
</Grid>
<Grid item sm={12} md={2}>
<center><img src={business}  className="iconimage"></img></center>
</Grid>
<Grid item sm={12} md={2}>
<center><img src={AP}  className="iconimage"></img></center>
</Grid>
<Grid item sm={2} md={2}>
<center><img src={Reader}  className="iconimage"></img></center>
</Grid>
    
</Grid>
</div>
    </>
  )
}
