import React, { Component, Fragment } from 'react'
import fetchLatestComment from '../../graphql/queries/fetchLatestComment'
import { graphql, useQuery } from 'react-apollo'
import { CommentType } from '../../generated/graphql'
import styled from 'styled-components'
import moment from 'moment'

const RecentlyComment = () => {
  const { data, loading } = useQuery(fetchLatestComment, {
    variables: { number: 4 }
  })
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <Fragment>
      <ReviewText>Review gần đây</ReviewText>

      {data.latestComment.map((comment: CommentType, index: number) => {
        return (
          <ReviewContainer key={index}>
            <h3>
              <span className="has-text-weight-bold">{comment.sender ? comment.sender : 'Ẩn danh'} </span>
              <span>{comment.isReplied ? 'đã trả lời' : 'đã bình luận'} trong</span> &nbsp;
              <a href={`/companies/${comment.company?.id}`}>{comment.company?.latinName}</a>{' '}
            </h3>
            <ReviewTime>
              {moment(Number(comment.createdAt)).format('HH:mm DD/MM/YYYY')}
              <span>
                <span className="icon is-small has-text-warning"></span>
              </span>{' '}
            </ReviewTime>
            <ReviewContent className="text-area" dangerouslySetInnerHTML={{ __html: comment.content ? comment.content : "" }}></ReviewContent>
          </ReviewContainer>
        )
      })}
    </Fragment>
  )
}

export default RecentlyComment

const ReviewText = styled.p`
  font-size: 1.75rem;
  font-weight: 500px;
  padding: 0.75rem 0rem;
  color: #fc625a;
`
const ReviewContainer = styled.div`
  background-color: #ffffff;
  margin: 0.875rem 0rem;
  padding: 1rem;
  border-radius: 20px;
  h3 {
      font-size: 1rem;
      a {
          text-decoration: none;
      }
  }
`

const ReviewTime = styled.p`
  font-size: 0.875rem;
`
const ReviewContent = styled.p`
  max-height: 7rem;
  min-height: 5rem;
  overflow-y: auto;
`
