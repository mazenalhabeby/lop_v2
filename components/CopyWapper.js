import React, {useEffect, useState} from 'react'
import {FaCopy} from 'react-icons/fa'

const CopyWapper = (props) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let copyText = document.querySelector(`#${props.inputId}`)
    copyText.querySelector('button').addEventListener('click', function () {
      let input = copyText.querySelector('input[value]')
      input.select()
      document.execCommand('copy')
      setShow(true)
      window.getSelection().removeAllRanges()
      setTimeout(() => {
        setShow(false)
      }, 2000)
    })
  }, [props.inputId])
  return (
    <div
      id={props.inputId}
      className="bg-white dark:bg-slate-800 flex flex-row relative p-2 rounded-lg w-full gap-2 shadow-md">
      <p className=" flex flex-1 text-lg">{props.content}</p>
      <input
        type={props.type}
        value={props.value}
        className=" opacity-0 absolute"
        readOnly
      />
      <button
        id="copyBtn"
        className="bg-yellow-600 p-2 h-full rounded shadow-xl z-50">
        <FaCopy />
      </button>
      <span
        className={`${show ? ' opacity-100' : ' opacity-0'} ${
          props.copiedMsgStyle && props.copiedMsgStyle
        } absolute bg-green-400 dark:bg-green-500 rounded flex items-center h-full w-full top-0 left-0 right-0 transition-all duration-300 ease-in-out px-2`}>{`${props.contentName} Copied`}</span>
    </div>
  )
}

export default CopyWapper
