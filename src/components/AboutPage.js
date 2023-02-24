import React from 'react'
import "./AboutPage.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import kitty from "../images/kitty workings.png"
import iron from "../images/kittyironman.png"
import post from "../images/kittywithpost.png"
import belt from "../images/kittyconveyerbelt.png"


import { Information } from './Information';

export const AboutPage = () => {

   
  return (
    <>
    <Box>
        <Grid container>
            <Grid item sm={12} md={6}>
                <div className="kittycontent">
                <img src={kitty} alt="kitty" className="kittyimage" ></img>
                </div>
             
            </Grid>
            <Grid item sm={12} md={6}>
                <div className='abouthead'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
            className="my-auto icon icon-tabler icon-tabler-chart-pie techiconsmall sm:mr-0 mt-2 sm:mt-0" 
            width="30" 
            height="35" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="blue" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8"></path>
                <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
            </svg>
                    </div>
            <div>
            <span style={{color:"lightblue"}}>Data Encrichmeny</span>
                </div>  
           
                </div>
<Information 
secondhead="Our data is available for all your general purpose tools"
body="Import your website list and our technology stack will do all the heavy lifting,
pulling contact information that would take weeks or months to gather with traditional market research methods.
Our tools and technologies crawl and scan websites completely autonomously."
key1="Website lookup capabilities and technology comparable to the best in the industry."
key2="Generate high quality leads with our technology reports."
key3="Identify technographic segmentation."

/>

            </Grid>
        </Grid>
    </Box> 
    <Box>
        <Grid container>
            <Grid item sm={12} md={6}>
            <div className='abouthead'>
                <div>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-shield-lock techiconsmall techiconsecurity sm:mr-0 sm:mt-0" 
            width="30" 
            height="35" 
            viewBox="0 0 24 24" 
            stroke-width="2" stroke="blue" 
            fill="none" stroke-linecap="round" 
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
            <circle cx="12" cy="11" r="1"></circle><line x1="12" y1="12" x2="12" y2="14.5"></line>
            </svg>
            </div>
            <div>
            <span style={{color:"lightblue"}}>Security Reconnaissance</span>
            </div>
           
            </div>
            <Information 
          
            secondhead="Your security is our top priority."
            body="Security professionals worldwide use our web technologies. 
            This solution helps you track security threats on your website. 
            The technology also provides you with detailed information on vulnerabilities and exploitation risks."
            key1="Track your own and your competitors' technology trends."
            key2="Effectively assess the depth of technology penetration."
            key3="Identify bugs and the impact of patches."
          
            
            />
           
            
            </Grid>
            <Grid item sm={12} md={6}>
            <div className="kittycontent">
                <img src={iron} alt="iron" className="kittyimage" ></img>
                </div>


            </Grid>
        </Grid>
    </Box> 
    <Box>
        <Grid container>
        <Grid item sm={12} md={6}>
                <div className="kittycontent">
                <img src={post} alt="post" className="kittyimage"></img>
                </div>
            
                </Grid>
            <Grid item sm={12} md={6}>
                <div className='abouthead'>
                <div>
                <svg
                 xmlns="http://www.w3.org/2000/svg" 
                 className="icon icon-tabler icon-tabler-mail techiconsmall sm:mr-0 mt-1 sm:mt-0"
                  width="30" 
                  height="35"
                   viewBox="0 0 24 24" 
                   stroke-width="2" 
                   stroke="blue" 
                   fill="none" 
                   stroke-linecap="round" 
                   stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                    </div>
                    <div>
                    <span style={{color:"lightblue"}}>Email Verification</span>
                    </div>
                   

                </div>
                <Information 
          
          secondhead="Never worry about non-delivery of your emails"
          body="Our email extension technology verifies deliverability and checks the server connection to ensure that your email delivery rate remains high, keeping you off the contact blocklist. Our technologies allow us to do all of this without having to send an email to the contact."
          key1="Get immediate results and a responsive, intuitive UX with our technology."
          key2="Start with 100 free email verifications every month."
          key3="Top up email verification credits on the go."
        
          
          />
         
            </Grid>
          
        </Grid>
    </Box>
  
    <Box>
        <Grid container>
            <Grid item sm={12} md={6}>
                <div className="abouthead">
                <div>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                 className="icon icon-tabler icon-tabler-api-app" 
                 width="30" 
                 height="35"
                  viewBox="0 0 24 24" 
                  stroke-width="2" 
                  stroke="blue" fill="none" 
                  stroke-linecap="round"
                   stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"></path>
                    <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5"></path>
                    <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5"></path><path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5"></path>
                    </svg>
                    </div>
                    <div>
                    <span style={{color:"lightblue"}}>APIs</span>
                    </div>
                   
                </div>
                <Information 
          
          secondhead="Get unlimited access to our APIs"
          body="With Ful.io APIs, you have access to any technology stack, contact details,
           relevant social handles, and much more. Much like BuiltWith, our technology lets you analyze many websites at once, 
           track data on technology usage, and even build your own analytics dataset."
          key1="Get results right away and update your datasets in real-time."
          key2="Our technologies let you easily analyze multiple websites at once."
          key3="Take advantage of a free trial before signing up."
        
          
          />


            </Grid>
            <Grid item sm={12} md={6}>
            <div className="kittycontent">
                <img src={belt} alt="belt" className="kittyimage"></img>
                </div>
            </Grid>
        </Grid>
    </Box>
    
    </>
  )
}
