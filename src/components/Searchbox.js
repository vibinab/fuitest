import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Searchbox.css"

export const Searchbox = () => {
  return (
    <>
    <Box>
        <Grid conatiner>
            <Grid item sm={12} md={12}>
                <div className='searchcontentmain'> 
                <div className='searchcontent'> 
                <Box sx={{textAlign:"center"}}>
                    <p className='shead'>98424 new domains added on 23 February 2023  <span className='read'>Read More</span></p>
                </Box>
                <div className='searchcontent1'>
                    <h3 className='firstp'>What Is The Web Built On?</h3>
                    <p className='secondp'>Uncover the technology stack behind any website.</p>
                    <p className='secondp'>Use our tools for lead generation, market analysis and competitor research.</p>
                    <div className='searchboxfield'>
                        <div className='searchinputdiv'>
                            <input type="text" 
                            placeholder="Enter URL for lookup" 
                             variant="filled"
                              size="small" 
                             className='searchinput'
                            
                            
                             
                             />
                        </div>
                        <div>
                        <Button variant="outlined"  className='searchinputbtn'>Search</Button>
                           
                        </div>
                    </div>
                    <p style={{marginTop:"4rem",fontSize:"1.1rem"}}>We periodically scan <span style={{backgroundColor:"lightblue",paddingLeft:"0.7rem",paddingRight:"0.7rem"}}>212,396,680</span> websites and provide up-to-date information.</p>
                </div>
                </div>

                </div>
            </Grid>

        </Grid>
    </Box>
    
    
    </>
  )
}
