import React from 'react'
import { Searchbox } from './Searchbox'
import { Content } from './Content'
import { AboutPage } from './AboutPage'
import { CardDisplay } from './CardDisplay'
import { FaqQuestion } from './FaqQuestion'
import { CardIcons } from './CardIcons'


import "./Home.css"

export const Home = () => {
  return (
    <>
    <Searchbox />
    <Content />
   <AboutPage />
   <CardIcons />
   <CardDisplay />
  <FaqQuestion />
  
    
    </>
   
  )
}
