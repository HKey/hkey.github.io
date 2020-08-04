import React from "react"

// Components
import HeaderLink from "./headerlink"
import TagList from "./taglist"

const PageLink = ({ title, slug, excerpt, date, tags }) => {
  return (
    <article key={slug}>
      <header>
        <HeaderLink
          title={title}
          slug={slug}
        />
        <small>{date}</small>
        {tags &&
         <small>
           <TagList tags={tags} />
         </small>}
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
