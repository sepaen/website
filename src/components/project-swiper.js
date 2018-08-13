import React from 'react'
import styled from 'styled-components'

import Swiper from './swiper'
import withProps from '../utils/with-props'

const VerticalSwiper = styled(withProps(Swiper, { flexDirection: 'column' }))`
  > * {
    flex-shrink: 0;
    transform: translate3d(0, ${p => -p.index * 100}vh, 0);
    transition: transform ease-in-out 0.3s;
  }
`

class ProjectSwiper extends React.Component {
  state = {
    index: 0,
  }

  select = index => {
    const size = this.props.children.length
    const newIndex = Math.max(0, Math.min(index, size - 1))

    this.setState({ index: newIndex })
  }

  onSwipe = direction => {
    const { index } = this.state

    if (direction === Swiper.NORTH) {
      this.select(index - 1)
    } else if (direction === Swiper.SOUTH) {
      this.select(index + 1)
    }
  }

  render() {
    return (
      <VerticalSwiper
        {...this.props}
        index={this.state.index}
        onSwipe={this.onSwipe}
        height="100vh"
        overflow="hidden"
      />
    )
  }
}

export default ProjectSwiper
