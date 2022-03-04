import React from 'react'
import DefaultLayout from './DefaultLayout'
import HomeLayout from './HomeLayout'
import WhitePaper from './WhitePaper'

const layouts = {
  default: DefaultLayout,
  home: HomeLayout,
  whitePaper: WhitePaper,
}

const LayoutWrapper = (props) => {
  const Layout = layouts[props.children.type.layout]

  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>
  }
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>
}

export default LayoutWrapper
