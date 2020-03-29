import React, { useState, useEffect, useRef } from 'react'
import ShowMoreText from 'react-show-more-text'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { Link, withRouter } from 'react-router-dom'
import { graphql, useQuery } from 'react-apollo'
import Pagination from '../pagination'
// import queryString from 'query-string'
import queryCompany from '../../graphql/queries/fetchCompanies'
import { CompanyType } from '../../generated/graphql'
import JobfairSelect from '../jobfairselection'
// import Pagination from './../../../components/Pagination'

const Company = (props: any) => {
  const { data, loading } = useQuery(queryCompany)
  //const { location, history } = props;

  //const queryParams = queryString.parse(location.search)
  const [using, setUsing] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(5);
  const [jobfair, setJobfair] = useState("Tất cả")
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const mounted = useRef()

  // useEffect(() => {
  //     if (!mounted.current) {
  //         mounted.current = true;
  //     } else {
  //         setCurrentPage(queryParams.page ? queryParams.page : 1)
  //         setJobfair(queryParams.jobfair ? queryParams.jobfair : "Tất cả")
  //     }
  // }, [queryParams.page, queryParams.jobfair]);

  // useEffect(() => {
  //     if (!mounted.current) {
  //         mounted.current = true;
  //     } else {
  //         history.push(`?jobfair=${jobfair}&page=${currentPage}`)
  //     }
  // }, [jobfair, history, currentPage])

  if (loading) {
    return <p>Loading...</p>
  }
  const companies = data.companies
  const companyFiltered = (jobfair == "Tất cả") ? companies : companies.filter((company: CompanyType) => company.jobfair?.title == jobfair)

  const currentItems = companyFiltered.slice(indexOfFirstItem, indexOfLastItem);
  //const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fade>
      <div>
        <JobfairSelect jobfair={jobfair} page={currentPage} setCurrentPage={setCurrentPage} setJobfair={setJobfair} />
                <div className="ml-3 mt-3">
                    <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} pageSize={itemsPerPage} total={companyFiltered.length} using={using} setUsing={setUsing} />
                </div>

        <div>
          {currentItems.map((company: CompanyType, index: number) => {
            return (
              <CompanyInfo key={index}>
                <Link key={index} to={`/companies/${company.id}`}>
                  <CompanyLogo>
                    <img src={company.image} />
                  </CompanyLogo>
                </Link>
                <CompanyInfoDetail>
                  <CompanyInfoName>
                    <Link key={index} to={`/companies/${company.id}`}>
                      {company.latinName}
                    </Link>
                  </CompanyInfoName>
                  <CompanyInfoLanguage className="company-info__other">
                    <span>
                      <span className="icon">
                        {' '}
                        <i className="fas fa-briefcase" />
                      </span>
                      {company.language}
                    </span>
                    <br />
                  </CompanyInfoLanguage>
                  <CompanyInfoDes>
                    <span className="icon">
                      {' '}
                      <i className="fas fa-users" />{' '}
                    </span>
                    <ShowMoreText
                      /* Default options */
                      lines={2}
                      more="Show more"
                      less="Show less"
                      anchorClass=""
                      expanded={false}
                      width={400}
                    >
                      {company.jobDescription}
                    </ShowMoreText>
                  </CompanyInfoDes>

                  <CompanyInfoLocation>
                    <span>
                      <span className="icon">
                        {' '}
                        <i className="fas fa-building" />{' '}
                      </span>
                      {company.address}
                    </span>
                  </CompanyInfoLocation>
                </CompanyInfoDetail>
              </CompanyInfo>
            )
          })}
        </div>

        <div className="last-item mb-1 ml-3">
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pageSize={itemsPerPage}
            total={companyFiltered.length}
            using={using}
            setUsing={setUsing}
          />
        </div>
      </div>
    </Fade>
  )
}

//const Company = withRouter(graphql(queryCompany)(ListCompany))

export default Company

const CompanyInfo = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0.875rem 0.5rem;
  border-radius: 8px;
  background-color: #fff;
  flex-direction: row;
`

const CompanyLogo = styled.figure`
  margin:0 0.5rem;
  width: 64px;
  align-items: center;
  position: relative;
  img {
    display: block;
    height: auto;
    width: 100%;
  }
`

const CompanyInfoDetail = styled.div`
  span {
    font-size: 0.875rem;
  }
`

const CompanyInfoName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  a {
    text-decoration: none;
  }
`
const CompanyInfoLanguage = styled.div``

const CompanyInfoDes = styled.div`
  display: flex;
  flex-direction: row;
`

const CompanyInfoLocation = styled.div``
