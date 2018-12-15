import React from 'react'
import { graphql } from 'gatsby'

import extractSlug from '../utils/extract-slug'
import publishedProjects from '../utils/published-projects'
import defaultBG from '../utils/default-bg'
import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'
import ProjectSwiper from '../components/project-swiper'
import Down from '../components/down'

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            published
            title
            fulltitle
            subtitle
            color
          }

          fields {
            cover {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  src
                }
              }
            }

            images {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  src
                }
              }
            }
          }

          fileAbsolutePath
        }
      }
    }
  }
`

const NextProject = Down.extend({
  position: 'fixed',
  zIndex: 2,
  width: 20,
  height: 20,
  bottom: 20,
  right: 20
})

class ProjectsPage extends React.Component {
  state = {
    index: 0
  }

  next = () => {
    const projects = publishedProjects(this.props.data)

    this.setState({
      index: (this.state.index + 1) % projects.length
    })
  }

  onSwipe = index => {
    this.setState({ index })
  }

  render() {
    const { data } = this.props
    const { index } = this.state

    const title = data.site.siteMetadata.title
    const projects = publishedProjects(data)

    projects.forEach(({ node }, i) => {
      if (!node.frontmatter.color) {
        node.frontmatter.color = defaultBG(i)
      }
    })

    const bg = projects[index].node.frontmatter.color

    return (
      <Layout title={title} bg={bg}>
        <ProjectSwiper index={index} onSwipe={this.onSwipe}>
          {projects.map(({ node }) => (
            <ProjectPreview key={extractSlug(node)} project={node} />
          ))}
        </ProjectSwiper>

        <NextProject onClick={this.next} />
      </Layout>
    )
  }
}

export default ProjectsPage
