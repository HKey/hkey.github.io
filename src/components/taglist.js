import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const TagList = ({ tags }) => {
  return (
    <ul style={{
      marginBottom: 0,
      marginLeft: 0,
    }}>
      {tags.map(tag => {
        return (
          <li style={{
            display: `inline`,
            marginRight: rhythm(1 / 4),
          }}>
            <Link to={`/tags/${kebabCase(tag)}`} >
              {tag}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default TagList
