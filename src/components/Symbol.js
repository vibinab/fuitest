import React, { useState } from 'react'


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Symbol.css"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Symbol = () => {
    const [isclosed,setisclosed]=useState(true)
    const ShowForm=()=> {
        console.log("show form")
        setisclosed(false)
    }
    const CloseForm=()=> {
        console.log("close form") 
        setisclosed(true)
    }
  return (
    <>
    <div style={{display:"flex"}}>
        <div className='symbol1'>
        <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeDh2whAAAAADJjk9Q_DD2WMTAVKN_t_QUlOrHj&amp;co=aHR0cHM6Ly9mdWwuaW86NDQz&amp;hl=en&amp;type=image&amp;v=Nh10qRQB5k2ucc5SCBLAQ4nA&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=x1cjceg6oor4" width="256" height="60" role="presentation" name="a-6lp6dmt80sru" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>

        </div>
        <div className='symbol2'>
           { isclosed?<WhatsAppIcon onClick={ShowForm}sx={{fontSize:"4rem",marginRight:"2rem", color:"green"}}/>: 
           <CancelIcon onClick={CloseForm} sx={{fontSize:"4rem",marginRight:"2rem", color:"green"}}></CancelIcon>
           }
        </div>
    </div>
    <div>
{
    !isclosed && <div className='whatappform'> 
    

    <Stack
      component="form"
      sx={{
        width: '25ch',
        boxshadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="*Name"
        variant="filled"
        size="small"
      />

<TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="*Email"
        variant="filled"
        size="small"
      />

<TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="*Message"
        variant="filled"
        size="large"
      />

<TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Industry"
        variant="filled"
        size="large"
      />
<TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Available for a meeting with the Founder"
        variant="filled"
        size="large"
      />

<Button variant="contained" sx={{backgroundColor:"green"}}>Submit</Button>

      </Stack>
    
     </div>

}
    </div>
    </>
  )
}
