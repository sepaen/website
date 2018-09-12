import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectDetails from '../components/project-details'
import NextProject from '../components/next-project'

export const query = graphql`
  query ProjectDetailsQuery($fileRx: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fileAbsolutePath: { regex: $fileRx }) {
      html

      frontmatter {
        title
        subtitle
        color
        images {
          image
        }
      }

      fileAbsolutePath
    }

    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          fileAbsolutePath
        }
      }
    }
  }
`

const ProjectDetailsPage = ({ data, pageContext }) => {
  const title = data.site.siteMetadata.title
  const project = data.markdownRemark
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout title={title} bg={project.frontmatter.color}>
      <ProjectDetails project={project} />

      <NextProject current={pageContext.slug} projects={projects} />
    </Layout>
  )
}

export default ProjectDetailsPage
