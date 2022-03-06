import SideBar from '@/components/pages/white_paper/SideBar'
import {IconButton} from '@mui/material'
import {MdClose, MdMenu} from 'react-icons/md'
import React, {useState} from 'react'
import ContainerLayout from './ContainerLayout'

const WhitePaper = (props) => {
  const [barOpen, setBarOpen] = useState(false)
  return (
    <ContainerLayout>
      <div className="flex flex-row">
        <div>
          <SideBar barOpen={barOpen} />
        </div>
        <div className=" p-2 -right-12 lg:hidden z-[99] fixed">
          <IconButton
            className="text-black dark:text-white"
            onClick={() => {
              setBarOpen(!barOpen)
            }}>
            {barOpen ? <MdMenu /> : <MdClose />}
          </IconButton>
        </div>
        <div>{props.children}</div>
      </div>
    </ContainerLayout>
  )
}

export default WhitePaper
