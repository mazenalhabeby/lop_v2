import Link from 'next/link'
import {withRouter} from 'next/router'
import React from 'react'

const ActiveLink = ({router, href, children}) => {
  ;(function prefetchPages() {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname)
    }
  })()
  const isCurrentPath = router.pathname === href || router.asPath === href
  return (
    <Link href={href}>
      <a>
        <h2
          className={`${
            isCurrentPath &&
            "bg-[url('/images/border_light.png')] bg-contain bg-bottom bg-no-repeat  dark:bg-[url('/images/border.png')] text-yellow-700 dark:text-yellow-500"
          } p-4 text-center list-none`}>
          {children}
        </h2>
      </a>
    </Link>
  )
}

export default withRouter(ActiveLink)
