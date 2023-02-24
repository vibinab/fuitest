import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import kitty from "../images/kitty workings.png";
import "./Information.css";

export const Information = (props) => {
  const {Showicon }=props
  console.log("props",props)
  return (
    <>
    
            <div className='kittytext'>
             <h3 className='secondhh'>{props.secondhead}</h3>
            <p>{props.body}</p>
            <p className='keyghighp'>Key Highlights:</p>
            <ul className='keylist'>
              <li>
              <div className='keyhead'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
              className="icon icon-tabler icon-tabler-checks"
               width="25" 
               height="20" 
               viewBox="0 0 24 24" 
               stroke-width="2"
                stroke="green" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 12l5 5l10 -10"></path><path d="M2 12l5 5m5 -5l5 -5"></path></svg>
                  </div>
                  <div>
                  <span>{props.key1}</span>
                </div>
                </div>
                  </li>
                  <li>
                    <div className='keyhead'>
                      <div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
              className="icon icon-tabler icon-tabler-checks"
               width="25" 
               height="20" 
               viewBox="0 0 24 24" 
               stroke-width="2"
                stroke="green" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 12l5 5l10 -10"></path><path d="M2 12l5 5m5 -5l5 -5"></path>
                  
                  </svg>
                  </div>
                  
                  <div>
                  <span>{props.key2}</span>
                  </div>
                  </div>
                  </li>
                  <li>
                    <div className='keyhead'>
                      <div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
              className="icon icon-tabler icon-tabler-checks"
               width="25" 
               height="20" 
               viewBox="0 0 24 24" 
               stroke-width="2"
                stroke="green" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 12l5 5l10 -10"></path><path d="M2 12l5 5m5 -5l5 -5"></path></svg>
                  </div>
                 <div>
                  <span>{props.key3}</span>
                  </div>
                  </div>
                  </li>
            </ul>
                 </div>
       
    
    </>
  )
}
