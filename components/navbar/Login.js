import {Button} from '@mui/material'
import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'

const Login = (props) => {
  return (
    <>
      <Button
        variant="text"
        className="flex flex-row items-center justify-start gap-2 text-slate-700 dark:text-white"
        onClick={props.toggleModel}>
        <FaRegUserCircle className="text-xl" />
        Login
      </Button>
    </>
  )
}

export default Login
