import SideBar from '@/components/pages/white_paper/SideBar'
import React from 'react'
import ContainerLayout from './ContainerLayout'

const WhitePaper = (props) => {
  return (
    <ContainerLayout>
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col w-4/5 mx-auto max-w-lg">
          <div>{props.children}</div>
        </div>
      </div>
    </ContainerLayout>
  )
}

export default WhitePaper
