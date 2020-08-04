import React from "react"
// import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageLink from "../components/pagelink"

import { rhythm } from "../utils/typography"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const { edges } = data.allMarkdownRemark
  const tagHeader = `Tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
        }}
      >{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          return (
            <PageLink
              title={node.frontmatter.title}
              slug={node.fields.slug}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
            />
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
          }
          excerpt
        }
      }
    }
  }
`
