import React from "react"

import HeaderLink from "./headerlink"

const PageLink = ({ title, slug, excerpt, date }) => {
  return (
    <article key={slug}>
      <header>
        <HeaderLink
          title={title}
          slug={slug}
        />
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
