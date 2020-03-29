import React, { useEffect, FC } from 'react'
import { useQuery } from 'react-apollo'
import fetchJobfair from '../../graphql/queries/fetchJobfair'
import styled from 'styled-components'
import { Jobfair } from '../../generated/graphql'

interface JobfairProps {
  jobfair: string
  page: number
  setJobfair: any
  setCurrentPage: any
}

const JobfairSelection: FC<JobfairProps> = (props: JobfairProps) => {
  const { setJobfair, jobfair, setCurrentPage } = props

  const { data, loading } = useQuery(fetchJobfair)
  //   useEffect(() => {
  //     if (data.jobfairs) {
  //       if (!data.jobfairs.map((item: Jobfair) => item.title).includes(jobfair)) {
  //         setJobfair('Tất cả')
  //       }
  //     }
  //   }, [data, jobfair, setJobfair])

  if (loading || !data.jobfairs) {
    return <p>Đang tải danh sách Jobfair</p>
  }

  return (
    <JobfairContainer className="d-flex flex-row ml-3 justify-content-center align-items-center">
      <JobfairText className="d-flex flex-row justify-content-center align-items-center pr-4">
        <b>Đơn vị tổ chức</b> &nbsp;
      </JobfairText>
      <JobfairSelect
        className="selectunit"
        required
        value={jobfair}
        onChange={e => {
          setJobfair(e.target.value)
          setCurrentPage(1)
        }}
      >
        <JobfairOption value="Tất cả">Tất cả</JobfairOption>
        {data.jobfairs.map((item: Jobfair, index: number) => (
          <JobfairOption key={index} value={item.title ? item.title : ""}>
            {item.title}
          </JobfairOption>
        ))}
      </JobfairSelect>
    </JobfairContainer>
  )
}

export default JobfairSelection

const JobfairContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.5rem;
`
const JobfairText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;
`
const JobfairSelect = styled.select`
  border-radius: 5px;
  border: 1px solid rgb(253, 207, 207);
  background-color: #ffffff;
  width: 5rem;
  justify-content: center;
  box-shadow: lightness($color: #5a5252);
  height: 2rem;
  color: #fc625a;
`
const JobfairOption = styled.option`
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
`
