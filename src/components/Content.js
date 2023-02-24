import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import tr from "../images/Technology_Reports.png";
import ev from "../images/Email_Verification.png";
import zf from "../images/Zone_Files.png";
import ds from "../images/Deep-Search.png";
import "./Content.css"

export const Content = () => {
  return (
    <>
    <Box sx={{ backgroundColor: 'lightgrey',paddingTop:'2rem',marginTop:"6rem"}}>
    <h3  className="imagehead">Power Your Sales And Marketing Teams</h3>
    <Grid container sx={{display:'flex',justifyContent:"center",textAlign:"center", marginTop:"2rem"}}>
       
    <Grid item lg={2} xs={12}>
      <div className='imagemaincontent'>
      <div className='subimagemaincontent1'>
      <img src={tr}className='imageprop' alt="technologyreports"/>
      <div className='imagecontent'>
        <p>Technology </p>
        <p>Reports</p> 
      </div>
      </div>
      <div className='subimagemaincontent2'>
      <div className='imageinfo'>
      <img src={tr}className='imageprop' alt="technologyreports"/> 
      <div className='imagesub' style={{textAlign:"center",padding:"1rem"}}>
        <p className='down'>
        Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites.
        </p>
      </div>
      </div>
      </div>
      </div>
    </Grid>
    <Grid item lg={2} xs={12}>
    <div className='imagemaincontent'>
    <div className='subimagemaincontent1'>
    <img src={ev} className='imageprop' alt="technologyreports"/>
    <div className='imagecontent'>
       <p>Rich data</p>
      </div>
   
    </div>
    <div className='subimagemaincontent2'>

      <div className='imageinfo'>
      <img src={ev}className='imageprop' alt="technologyreports"/> 
      <div className='imagesub' style={{textAlign:"center",padding:"1rem"}}>
        <p className='down'>
        Technology Reports include email, phone numbers, and website profiling metadata like IP, Hostname, DNS, titles, and other information.
        </p>
      </div>
      </div>
      </div>

    </div>
    </Grid>
    <Grid item lg={2} xs={12}>
    <div className='imagemaincontent'>
    <div className='subimagemaincontent1'>
    <img src={zf} className='imageprop' alt="technologyreports"/>
    <div className='imagecontent'>
        <p>Email </p>
           <p > Verification</p>
    </div>
    </div>
    <div className='subimagemaincontent2'>

<div className='imageinfo'>
<img src={zf}className='imageprop' alt="technologyreports"/> 
<div className='imagesub' style={{textAlign:"center",padding:"1rem"}}>
  <p className='down'>
  Industry-leading 9-step email verification engine. Never worry about email non-delivery again!
  </p>
</div>
</div>
</div>
    </div>
    </Grid>
    <Grid item lg={2} xs={12}>
    <div className='imagemaincontent'>
    <div className='subimagemaincontent1'>
    <img src={ds} className='imageprop' alt="technologyreports"/>
    <div className='imagecontent'>
        <p>Zone Files</p>
    </div>
    </div>
    <div className='subimagemaincontent2'>

<div className='imageinfo'>
<img src={ds}className='imageprop' alt="technologyreports"/> 
<div className='imagesub' style={{textAlign:"center",padding:"1rem"}}>
  <p className='down'>
  Download lists of active domains across 100s of gTLDs and ccTLDs updated daily.
  </p>
</div>
</div>
</div>
    </div>
    </Grid>
    <Grid item lg={2} xs={12}>
    <div className='imagemaincontent'>
    <div className='subimagemaincontent1'>
    <img src={tr} className='imageprop' alt="technologyreports"/>
    <div className='imagecontent'>
        <p>Deep Search</p>
    </div>
    </div>
    <div className='subimagemaincontent2'>

<div className='imageinfo'>
<img src={tr}className='imageprop' alt="technologyreports"/> 
<div className='imagesub' style={{textAlign:"center",padding:"1rem"}}>
  <p className='down'>
  Custom deploy our technology to search domains for contact information.
  </p>
</div>
</div>
</div>
    </div>
    </Grid> 
    <Grid item lg={12} xs={12}>
        <div className='imagebutton'>
            <button className='sub1'>Try for free</button>
            <button className='sub2'>How we are better</button>
        </div>

    </Grid>
    
    
    
    </Grid>

    </Box>
    </>

  )
}
