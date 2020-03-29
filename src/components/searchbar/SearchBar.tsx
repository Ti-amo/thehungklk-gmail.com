import React, { useState, FC } from 'react'
import styled from 'styled-components'
import banner from './../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useQuery } from '@apollo/react-hooks'
import fetchCompany from '../../graphql/queries/fetchCompanies'
import SearchInput, { createFilter } from 'react-search-input'

const SearchBar:FC = (props: any) => {
  console.log("PROPS", props)
  const { data, loading } = useQuery(fetchCompany)

  const [searchTerm, setSearchTerm] = useState('')
  const KEYS_TO_FILTERS = ['latinName']
  if (loading) {
    return <p>Loading...</p>
  }
  const companies = data.companies
  console.log('asdfasdf', companies)
  const filteredLatinName = companies.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
  return (
    <>
      <SearchBackground />
      <SeachArea className={`${isMobile ? 'px-2' : 'px-5'}`}>
        <SearchContain>
          <SearchInput2
            onChange={(event: any) => {
              setSearchTerm(event)
            }}
          />
          {searchTerm !== '' && (
            <SearchResult>
              {filteredLatinName.map((company: any, index: number) => {
                return (
                  <SearchDetailResult key={index}>
                    <img className="img-fluid" src={company.image} alt="" />
                    <Link key={index} to={`/companies/${company.id}`}>
                      <SearchResultName>{company.latinName}</SearchResultName>
                    </Link>
                  </SearchDetailResult>
                )
              })}
            </SearchResult>
          )}
        </SearchContain>
      </SeachArea>
    </>
  )
}

export default SearchBar

const SearchBackground = styled.section`
  height: 15rem;
  overflow-y: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${banner});
  @media screen and (max-width: 768px) {
    height: 220px;
  }
`

const SeachArea = styled.section`
  margin-top: -225px;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5rem;
`
const SearchContain = styled.div`
  margin: 0rem 3rem;
  flex-grow: 1;
  flex-shrink: 0;
  z-index: 1;
  position: relative;
  clear: both;
`
const SearchInput2 = styled(SearchInput)`
  input {
    outline: none;
    border-radius: 20px;
    width: 50%;
    height: 2.5rem;
    border: none;
    padding: 0rem 2rem;
    box-sizing: none;
    @media (max-width: 767.98px) {
      width: 100%;
    }
  }
`

const SearchResult = styled.div`
  margin-top: 0.3rem;
  z-index: 1;
  position: absolute;
  background-color: rgb(255, 239, 239);
  border-radius: 0.5rem;
  max-height: 14.5rem;
  overflow-y: auto;
  width: 50%;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`

const SearchDetailResult = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: start;
  &:not(:last-child) {
    border-bottom: 1px solid #5d5d68;
  }
  img {
    height: 30px;
    width: 30px;
    object-fit: contain;
    padding-right: 1rem;
  }
  a {
    text-decoration: none;
    align-self: center;
  }
`
const SearchResultName = styled.div`
  font-weight: 600;
` 
