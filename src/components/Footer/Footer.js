import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./Footer.css"
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';



export const Footer = () => {
  return (
    <>
    <Box sx={{backgroundColor:"grey", color:"white",paddingTop:"4rem" ,paddingBottom:"5rem"}}>
    <Grid container>
        <Grid item xs={12} md={4}>
            <div className='footericon'>
                <div style={{textAlign:"center"}}>
            <span style={{fontSize:"1.5rem"}}><b>Fui.io</b></span>
            <p style={{mmrginTop:"0.8rem"}}>	&#169; 2023 Ful,Inc</p>
            <p style={{mmrginTop:"0.8rem"}}>All rights reserved</p>
            <p><FacebookSharpIcon /> <LinkedInIcon /></p>
            </div>
            </div>

        </Grid>
        <Grid item xs={12} md={2}>
            <div>
<h3 className='footersub'>Features</h3>
<hr style={{width:"80%",marginTop:"0.6rem"}}></hr>
<ul className='footersublist'>
    <li>Check Domain</li>
    <li>Email Verification</li>
    <li>Zone Files Downloads</li>
    <li>Category Search</li>
    <li>Technology Search</li>
</ul>
</div>
        </Grid>
        <Grid item xs={12} md={2}>
            <div>
            <h3 className='footersub'>Top Technology Reports</h3>
            <hr style={{width:"80%",marginTop:"0.6rem"}}></hr>
            <ul className='footersublist'>
                <li>Websites using Nginx</li>
                <li>Websites using JQuery</li>
                <li>Websites using MySQL</li>
                <li>Websites using Shopify</li>
                <li>Websites using WooCommerce</li>
            </ul>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
            <div>
            <h3 className='footersub'>More to know</h3>
            <hr style={{width:"80%",marginTop:"0.6rem"}}></hr>
            <ul className='footersublist'>
                <li>Feature Comparisons</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Terms of Use</li>
                <li>About Us</li>
            </ul>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
        <h3 className='footersub'>Contact</h3>
        <hr style={{width:"80%",marginTop:"0.6rem"}}></hr>
            <div className="mainfooterlast">
          
           
            <div className='submainfooterlast'>
            <ul className='footersublist'>
                <li>
                    <div style={{display:"flex"}}>
                        <div>
                        <MailOutlineIcon />
                        </div>
                        <div style={{marginLeft:"0.5rem"}}>
                        <span>support@ful.io</span>
                        </div>
                    </div>
                    </li>
                <li>
                <div style={{display:"flex"}}>
                        <div>
                        <PhoneIcon  />
                        </div>
                        <div style={{marginLeft:"0.5rem"}}>
                        <span>+1 343 303 6668</span>
                        </div>
                    </div>



                    </li>
                    <li>
                    <div style={{display:"flex"}}>
                        <div>
                       <FmdGoodIcon />
                        </div>
                        <div style={{marginLeft:"0.5rem"}}>
                        <p>Ful, Inc.</p>
                        <p>1207 Delaware Ave</p>
                        <p>#348 Wilmington,</p>
                        <p>DE 19806</p>
                        </div>
                    </div>

                    </li>
            </ul>
            </div>
            </div>
        </Grid>
    </Grid>
    </Box>
    </>
  )
}
