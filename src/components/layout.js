/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <iframe
        src={require("../components/baileSanta.mp3")}
        allow="autoplay"
        id="iframeAudio"
        style={{ display: "none" }}
      ></iframe>
      <audio controls autoPlay loop style={{ display: "none" }}>
        <source
          typeof="audio/mp3"
          src={require("../components/baileSanta.mp3")}
        ></source>
      </audio>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
