import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const HeaderLink = ({ title, slug }) => {
  return (
    <h3
      style={{
        marginBottom: rhythm(1 / 4),
      }}
    >
      <Link style={{ boxShadow: `none` }} to={slug}>
        {title}
      </Link>
    </h3>
  )
}

export default HeaderLink
