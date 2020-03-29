import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import RecentlyComment from './RecentlyComment'
import Column from '../layouts/Column'
interface Props {}

const index = (props: Props) => {
  return (
    <CommentContainer>
      <RecentlyComment />
    </CommentContainer>
  )
}

export default index

const CommentContainer = styled(Column)`
padding-left: 1rem;
  margin-top: 5rem;
  @media (max-width: 767.98px) {
    margin-top: 1rem;
  }
`
