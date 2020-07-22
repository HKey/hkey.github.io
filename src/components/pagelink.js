import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const PageLink = ({ title, slug, excerpt, date }) => {
  return (
    <article key={slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={slug}>
            {title}
          </Link>
        </h3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default PageLink
