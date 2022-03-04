import ActiveLink from '@/components/ActiveLink'
import {IconButton} from '@mui/material'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {FaHome} from 'react-icons/fa'
import {MdClose, MdMenu} from 'react-icons/md'
import {whitePaperLinks as tabs} from 'data/whitePaperLinks'

const SideBar = () => {
  const [barOpen, setBarOpen] = useState(false)
  return (
    <>
      <motion.div
        animate={{left: barOpen ? '-100vw' : '0'}}
        className=" absolute lg:static">
        <div className="h-screen shadow-2xl shadow-slate-800 flex flex-col space-y-4 text-center relative justify-between bg-slate-100 dark:bg-slate-900">
          <div className="rounded-br-3xl rounded-bl-3xl bg-slate-700 p-2 shadow-2xl hover:bg-slate-600 relative w-1/2 place-self-center">
            <Image
              src={'/images/lop.png'}
              width={90}
              height={60}
              alt={'lop'}
              priority
            />
          </div>
          <ul className="flex-1 overflow-y-scroll scroll">
            {tabs.map((tab) => {
              return (
                <li key={tab.id}>
                  <ActiveLink href={`/${tab.subName}`}>
                    {tab.tabName}
                  </ActiveLink>
                </li>
              )
            })}
          </ul>
          <div className="p-4 mx-auto">
            <Link href={'/'}>
              <a>
                <button className="flex flex-row justify-center items-center gap-3 nm-flat-slate-100-lg dark:nm-flat-slate-900-xl p-4 dark:hover:bg-slate-800 rounded-xl hover:bg-slate-200 hover:text-yellow-700 dark:hover:text-yellow-500">
                  <FaHome />
                  Home
                </button>
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className=" p-2 -right-12 lg:hidden">
        <IconButton
          onClick={() => {
            setBarOpen(!barOpen)
          }}
          className="text-slate-900 dark:text-slate-100">
          {barOpen ? <MdMenu /> : <MdClose />}
        </IconButton>
      </div>
    </>
  )
}

export default SideBar
