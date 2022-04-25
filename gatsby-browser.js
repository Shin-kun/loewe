/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "@fontsource/montserrat"
import "@fontsource/lora"
import "@fontsource/anton"
import "./src/styles/preloader.css"

import Preloader from "./static/components/preloader"

export const wrapPageElement = ({ element, props }) => {
  const { location } = props
  return (
    <>
      <Preloader path={location.pathname} />
      {element}
    </>
  )
}
