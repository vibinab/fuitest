import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./SingleCard.css"


export const SingleCard = (props) => {
  return (
    <>

      <Card sx={{ maxWidth: 345,height:250, border:0,marginTop:5}}>
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            <img src={props.pic} className="authpic"></img>
          </Avatar>
        }
        
        title={props.title}
        subheader={props.subheader}
      />
   
    <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
      </CardContent>
      </Card>
    </>
  )
}
