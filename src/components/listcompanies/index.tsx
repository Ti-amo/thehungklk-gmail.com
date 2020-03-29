import React from 'react'
import TabMenu from './TabMenu'
import styled from 'styled-components'
import Column from '../layouts/Column'
import Company from './Company'
interface Props {}

const index = (props: Props) => {
  return (
    <CompanyContainer>
      <TabMenu />
      <TabSection>
        <Company />
      </TabSection>
    </CompanyContainer>
  )
}

export default index

const CompanyContainer = styled(Column)`
  padding: 0;
`

const TabSection = styled.div`
  min-height: 35rem;
`
