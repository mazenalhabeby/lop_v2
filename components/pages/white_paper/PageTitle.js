import React from 'react'

const PageTitle = (props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-max space-y-2">
        <h1 className=" font-aclonica text-lg lg:text-2xl tracking-wide">
          {props.title}
        </h1>
        <div className="flex flex-row justify-center items-center z-[1]">
          <div className="w-1/2 h-1 bg-gradient-to-l from-yellow-600"></div>
          <div className="w-[15px] h-[15px] rotate-45 border-2 border-yellow-600 bg-cyan-500 shadow dark:shadow-cyan-200 shadow-cyan-900 brightness-150"></div>
          <div className=" w-1/2 h-1 bg-gradient-to-r from-yellow-600"></div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
