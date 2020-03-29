import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import SearchBar from './../components/searchbar/SearchBar'
import Body from '../components/layouts/BodyMain'
import Footer from '../components/layouts/Footer'
import CompanyTab from '../components/listcompanies'
import ReviewTab from '../components/listcomments'

interface Props {}

const Index = (props: Props) => {
  return (
    <>
      <Body>
        <SearchBar />
        <ColumnContainer className={`${!isMobile ? 'px-5' : 'px-2'}`}>
          <CompanyTab />
          <ReviewTab />
        </ColumnContainer>
      </Body>
      <Footer />
    </>
  )
}

export default Index

const ColumnContainer = styled.div`
  display: flex;
  margin: 2.25rem 0 auto auto;
  padding: 0 3rem;
  min-height: 45rem;
  padding-bottom: 3rem;

  @media (max-width: 767.98px) {
    display: grid;
  }
  &:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem);
  }
`
