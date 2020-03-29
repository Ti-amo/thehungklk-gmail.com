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
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 1.5px solid #dbdbdb;
    height: fit-content;
    background-color: #fc625a;
    border-top-left-radius: 15px; 
    border-top-right-radius: 15px;
`
const TabText = styled.h1`
margin-top: 0;
text-align: center;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 450;
  line-height: 1.125;
  font-style: italic;
`
