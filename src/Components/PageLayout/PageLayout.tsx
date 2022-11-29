import React from 'react'
import Header from '../Header/Header'
import KanbanBoard from '../KanbanBoard/KanbanBoard'
import Sidebar from '../Sidebar/Sidebar'
import Toolbar from '../Toolbar/Toolbar'
import { GridWrapper } from './styles'

const PageLayout = () => {
  return (
    <GridWrapper>

        <Sidebar/>

     
        <Toolbar/>
       
      
        <Header/>
        <KanbanBoard/>
      
    </GridWrapper>
  )
}

export default PageLayout
