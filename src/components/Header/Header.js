import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {  useTheme } from '@mui/material/styles';
import {  makeTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import "./Header.css"


import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { BrowserRouter, Routes,Route,NavLink,Link } from "react-router-dom";

export const Header = (props) => {
   const theme= useTheme()
   console.log("theme",theme) 
   const isMobile= useMediaQuery(theme.breakpoints.down("sm"))
   console.log("ismobile", isMobile)
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const Showlogin=()=> {
      console.log("show login")
     
      props.setissignup(false)
      props.setislogin(true)
    }

    const Showsignup=()=> {
      console.log("show signup")
      props.setissignup(true)
      props.setislogin(false)
    } 

    useEffect(()=> {
      props.setislogin(false)
      props.setissignup(false)
    },[])
  
  return (
    <>
    
      
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ful.io
          </Typography>
                      <div>
            {isMobile ?(
              <>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>

                <NavLink
               to="/"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                // marginLeft:"-30%",
                textDecoration:"none",
                background: isActive ? '#7600dc' : '#f0f0f0',
              
              })}
               >Home
               </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>


                <NavLink
               to="/Categorysearch"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                // marginLeft:"2rem",
                textDecoration:"none",
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
               >Categorysearch
               </NavLink>
                </MenuItem>

                <MenuItem onClick={handleClose}>


                <NavLink
               to="/Technologysearch"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                // marginLeft:"2rem",
                textDecoration:"none",
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
               >Technologysearch
               </NavLink>
                </MenuItem>

                
                <MenuItem onClick={handleClose}>


                <NavLink
               to="/ProfessionalDomainData"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                // marginLeft:"2rem",
                textDecoration:"none",
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
               >ProfessionalDomainData
               </NavLink>
                </MenuItem>

                <MenuItem onClick={handleClose}>


<NavLink
to="/Technologycompare"
style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
// marginLeft:"2rem",
textDecoration:"none",
background: isActive ? '#7600dc' : '#f0f0f0',
})}
>Technologycompare
</NavLink>
</MenuItem>


<MenuItem onClick={handleClose}>


<NavLink
to="/EnailVerification"
style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
// marginLeft:"2rem",
textDecoration:"none",
background: isActive ? '#7600dc' : '#f0f0f0',
})}
>EnailVerification
</NavLink>
</MenuItem>

<MenuItem onClick={handleClose}>


<NavLink
to="/Pricing"
style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
// marginLeft:"2rem",
textDecoration:"none",
background: isActive ? '#7600dc' : '#f0f0f0',
})}
>Pricing
</NavLink>
</MenuItem>

<MenuItem onClick={handleClose}>


<NavLink
to="/Blog"
style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
// marginLeft:"2rem",
textDecoration:"none",
background: isActive ? '#7600dc' : '#f0f0f0',
})}
>Blog
</NavLink>
</MenuItem>

<MenuItem onClick={handleClose}>


<NavLink
to="/Login"
style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
// marginLeft:"2rem",
textDecoration:"none",
background: isActive ? '#7600dc' : '#f0f0f0',
})}
>Login
</NavLink>
</MenuItem>  

<MenuItem onClick={handleClose}>


<NavLink
to="/Signup"
style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
// marginLeft:"2rem",
textDecoration:"none",
background: isActive ? '#7600dc' : '#f0f0f0',
})}
>
  Signup
</NavLink>
</MenuItem>





                
              </Menu>
              </>
              )
              :
              (
                <>
                <div className='navcontent'>
              <NavLink
               to="/"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : 'white',
                marginLeft:"-80%",
                textDecoration:"none",
                background: isActive ? '#7600dc' : 'none',
                padding:"0.5rem",
               
              
              })}
               >Home
               </NavLink>

               {/* dropdown */}
               <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{marginLeft:"10%"}}
                onClick={handleMenu}
                color="inherit"
              >
               <span>Features</span>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> <NavLink
               to="/Technologysearch"
             

               style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
                marginLeft:"2rem",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                // padding:"0.5rem",
                margin:0,
               
               })}
              >
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-code-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="blue" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12h-1v5h1"></path><path d="M14 12h1v5h-1"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path></svg>
             <span style={{paddingLeft:"0.5rem",paddingTop:"-0.5rem"}}>Technologysearch</span> 
                </NavLink>
                
                </MenuItem>


                <MenuItem onClick={handleClose}> 
              <NavLink
               to="/Categorysearch"
               style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
                marginLeft:"2rem",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                // padding:"0.5rem",
                margin:0,
               })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-multiple" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="blue" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="7" y="3" width="14" height="14" rx="2"></rect><path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path></svg>
               <span  style={{paddingLeft:"0.5rem",paddingTop:"-0.5rem"}}>Categorysearch</span>
                </NavLink>
                
                </MenuItem>

                
                <MenuItem onClick={handleClose}> 
              <NavLink
               to="/EnailVerification"
               style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
                marginLeft:"2rem",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                // padding:"0.5rem",
                margin:0,
               })}
              
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="blue" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>


             <span style={{paddingLeft:"0.5rem",paddingTop:"-0.5rem"}}>EnailVerification</span>
                </NavLink>
                
               
                </MenuItem>

                <MenuItem onClick={handleClose}> 
              <NavLink
               to="/ProfessionalDomainData"
               style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
                marginLeft:"2rem",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                // padding:"0.5rem",
                margin:0,
               })}
              
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shadow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="blue" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M13 12h5"></path><path d="M13 15h4"></path><path d="M13 18h1"></path><path d="M13 9h4"></path><path d="M13 6h1"></path></svg>
         <span style={{paddingLeft:"0.5rem",paddingTop:"-0.5rem"}}>ProfessionalDomainData</span>
                </NavLink>
                
                </MenuItem>

            

                      
<MenuItem onClick={handleClose}> 
<NavLink
to="/Technologycompare"
style={({ isActive }) => ({
color: isActive ? 'red' : 'blue',
marginLeft:"2rem",
textDecoration:"none",
// background: isActive ? '#7600dc' : 'none',
// padding:"0.5rem",
margin:0,
})}

>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-compare" width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2" stroke="blue" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><path d="M11 6h5a2 2 0 0 1 2 2v8"></path><polyline points="14 9 11 6 14 3"></polyline><path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path><polyline points="10 15 13 18 10 21"></polyline></svg>
<span style={{paddingLeft:"0.5rem",paddingTop:"-0.5rem"}}>Technologycompare</span>
</NavLink>

</MenuItem>
                
                
               
              </Menu>

              <NavLink
               to="/Pricing"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : 'white',
                marginLeft:"10%",
                textDecoration:"none",
                background: isActive ? '#7600dc' : 'none',
                padding:"0.5rem",
               
                
            
              })}
               
               >
                
                
                Pricing</NavLink>
             

              <NavLink
               to="/Blog"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : 'white',
                // marginLeft:"2rem",
                marginLeft:"10%",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                padding:"0.5rem",
               
                
            
              })}
               
               >
                
                
                Blog</NavLink>
                <NavLink
               to="/Login"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : 'white',
                marginRight:"2rem",
                marginLeft:"30%",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                // padding:"0.5rem",
               
                
            
              })}
               
               >
                
               
                { props.islogin && <Button sx={{color:"white"}} onClick={Showlogin} variant="text">Login</Button>}
                 </NavLink>

               
                <NavLink
               to="/Signup"
               style={({ isActive }) => ({
                color: isActive ? '#fff' : 'white',
                marginLeft:"10%",
                textDecoration:"none",
                // background: isActive ? '#7600dc' : 'none',
                // padding:"0.5rem",
               
                
            
              })}
               
               >
                
                
             
               
               {props.issignup && <Button sx={{backgroundColor:"white",Color:"blue",color:"blue"}}onClick={Showsignup} variant="contained">Signup</Button>}
               
               </NavLink>
              </div>
                 </>
              )
}
            </div>
          
        </Toolbar>
      </AppBar>
   
    
    </>
  )
}
