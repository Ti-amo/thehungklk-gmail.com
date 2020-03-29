import styled from 'styled-components'
import React, { FC } from 'react'

const TabMenu = () => {
  return (
    <TabMain>
      <div>
        <TabText>Danh sách công ty</TabText>
      </div>
    </TabMain>
  )
}

export default TabMenu

const TabMain = styled.div`
padding-top: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1.5px solid #dbdbdb;
    height: 3.3rem;
    background-color: #fc625a;
    border-top-left-radius: 15px; 
    border-top-right-radius: 15px;
`
const TabText = styled.p`
margin-top: 0;
text-align: center;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 450;
  font-style: italic;
`
