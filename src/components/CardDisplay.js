import React from 'react'
import { SingleCard } from './SingleCard'
import Grid from '@mui/material/Grid';
import todd from "../images/todd.webp"
import nicholas from "../images/nicholas.webp"
import chris from "../images/chris.png"
import robert from "../images/robert.webp"
import madsinger from "../images/madsingers.webp"
import yana from "../images/yana.jpg"

export const CardDisplay = () => {
  return (
    <>
    <div className='carddisplaymain'>
      <h2 style={{textAlign:"center"}}>Testimonials</h2>
    <Grid container>
      <Grid item xs={12} md={4}>
        <SingleCard
        pic={todd}
        title="Todd Dunsmore" 
        subheader="Doja Marketing/Defi Founder"
        info="These web technologies quickly became a game-changer for our business. 
        Lead generation projects that used to take a whole team are completely automatic now. 
        We were able to segment traffic based on location, identify more prospects, and onboard more clients. 
        I can't say enough good things about Ful.io"
        />
      </Grid>
      <Grid item xs={12} md={4}>
      <SingleCard 
        pic={nicholas}
        title="Nicholas Altimore" 
        subheader="Sirlinksalot"
        info="Companies need an edge, and Ful.io provided that edge for us. 
        We'd previously used BuiltWith, but the data and analytics capabilities of Ful.io were a better fit for us."
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <SingleCard
        pic={chris}
        title="Chris Richards" 
        subheader="Utterly Digital"
        info="We used to manually upload contact details and other data, but it took way too long. 
        We needed a solution that could automate the process and free up resources.
         Ful.io just works for us. Their technology is incredible."
        />
        </Grid>
    </Grid>
    <Grid container sx={{marginTop:"1rem"}}>
      <Grid item xs={12} md={4}>
      <SingleCard 
        pic={robert}
        title="Robert Kaene" 
        subheader="The Wednesday Club"
        info="Ful.io's apps and tools have completely changed the way we look at traffic and identify prospects. 
        Before, our R&D team tried BuiltWith, then worked to develop our own technology. 
        But with Ful.io, we can save both time and money"
        />
      </Grid>
        <Grid item xs={12} md={4}>
        <SingleCard 
        pic={madsinger}
        title="Mad Singers" 
        subheader="SEO Mastery Summit"
        info="We're always looking for new ways to boost our advertising efforts and analyze websites to improve our processes. 
        Ful.io has been a perfect partner throughout.
         We've been able to discover more valuable data on prospects than we ever did on our own"
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <SingleCard 
        pic={yana}
        title="Yana L" 
        subheader="SEO Consultant"
        info="Any ecommerce platform not using Ful.io's technologies is seriously missing out.
         The crawling tool at Ful.io is the best we've used so far. We love that you can pull it up right in the Chrome browser too. 
         Location, contact info, RSS, the speed we can draw in new clients now... Ful.io is amazing"
        />
        </Grid>
    </Grid>
    </div>
    
    </>
  )
}
