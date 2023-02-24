import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import kittyfaq from  '../images/kitty-faq.png'
import "./FaqQuestion.css"

export const FaqQuestion = () => {
  

  
  return (
    <>
      <div className="faqcontenthead">
        <h2 style={{textAlign:"left",marginLeft:"10%",marginBottom:"2rem"}}>Frequently Asked Question</h2>
        <Grid container>
          <Grid item sm={12} md={6}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How much will this cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We offer free and paid plans. Our paid plans start at $49/month or $499/year.
          We also offer enterprise plans for others building on our technology.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"2rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What information do we provide?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our technology reports come with metadata, including phone numbers, emails, IPs, DNS information, hostname, titles, and much more!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"2rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do you collect your information?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our server cluster crawls thousands of sources daily to find active domains. We then segment active domains using our repository of 3000+ technology footprints. We also deploy our crawlers to enrich this segmented technographic data with additional metadata.

All our lists are updated daily.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{marginTop:"2rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I upload domain lists?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! All accounts come preloaded with credits to get segmentation and other data for your custom domain lists.
           We also baked in a "Deep Search" engine to obtain hard-to-find contact information from domains.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item sm={12} md={6}>
        <div className='accimagecontent'>
<img src={kittyfaq} className="accimage"/>
        </div>

      </Grid>
      </Grid>
    </div>
    
    </>
  )
}
