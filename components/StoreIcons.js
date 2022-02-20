import Image from 'next/image'
import React from 'react'

const StoreIcons = () => {
  const stores = [
    {
      id: 1,
      name: 'app store',
      fileName: 'appstore',
    },
    {
      id: 2,
      name: 'play store',
      fileName: 'googlestore',
    },
    {
      id: 3,
      name: 'microsoft store',
      fileName: 'windowsstore',
    },
    {
      id: 4,
      name: 'playStation store',
      fileName: 'playstation',
    },
    {
      id: 5,
      name: 'xbox store',
      fileName: 'Xboxstore',
    },
  ]
  return (
    <>
      {stores.map((obj) => {
        return (
          <div
            key={obj.id}
            className="item-center flex flex-row items-center justify-center  gap-2 rounded-lg bg-slate-100 p-2 shadow-xl shadow-gray-400 dark:bg-slate-900 dark:shadow-xl dark:shadow-slate-800">
            <Image
              src={`/images/${obj.fileName}.png`}
              width={35}
              height={35}
              alt={obj.fileName}
              priority
            />
            <h2 className=" hidden text-xs font-bold tracking-wider lg:block lg:text-sm">
              {obj.name}
            </h2>
          </div>
        )
      })}
    </>
  )
}

export default StoreIcons
