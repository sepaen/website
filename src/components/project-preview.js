import React from 'react'

import extractSlug from '../utils/extract-slug'
import Content from './content'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'
import Link from '../system/link'

const ProjectPreview = ({ project, ...props }) => (
  <Content
    {...props}
    id={'anchor-' + extractSlug(project)}
    bg={project.frontmatter.color}
  >
    <Cell
      gridColumn="1"
      flexDirection="column"
      height="66%"
      mixBlendMode="difference"
      mr={4}
    >
      <Text children={project.frontmatter.title} />
      <Text children={project.frontmatter.description} />
    </Cell>

    <Cell gridColumn="2/6" position="relative" height="100%">
      <Link
        to={`/projects/${extractSlug(project)}`}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        p={30}
      >
        <Image
          src={project.frontmatter.images[0].image}
          maxWidth="100%"
          maxHeight="100%"
        />
      </Link>
    </Cell>
  </Content>
)

export default ProjectPreview
