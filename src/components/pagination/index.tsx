import React, { FC } from 'react'
import styled from 'styled-components'
interface PaginationProps {
    pageSize: number;
    total: number;
    currentPage: number;
    setCurrentPage: any;
    using: boolean;
    setUsing: any;
}

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
    const { pageSize, total, currentPage, setCurrentPage, using, setUsing } = props

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
        pageNumbers.push(i);
    }
    if (currentPage > pageNumbers.length) {
        setCurrentPage(1)
    }
    
    if (!pageNumbers.includes(Number(currentPage))) {
        setCurrentPage(1)
    }
    return (
        <PageContainer role="navigation" aria-label="pagination">
            <PageText>Trang <b>{currentPage}</b> trên tổng số <b>{pageNumbers.length}</b></PageText>
            <PageUL className="pagination-list">
                {pageNumbers.map((number) => {
                    return (
                        <PageLI
                            id = {(using && currentPage == number) ? "#3273dc" : ""}
                            key={number}
                            onClick={() => {
                                setCurrentPage(number)
                                setUsing(true)
                                window.scrollTo(0, 0)
                            }}
                        >
                            {number}
                        </PageLI>
                    )
                })}
            </PageUL>
        </PageContainer>
    )
}

export default Pagination;

const PageContainer = styled.nav`
    font-size: .75rem;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
`

const PageText = styled.span`
    margin:0 0.5rem;

`
const PageUL = styled.ul`
padding: 0;
margin: 0;
    list-style: none;
    display: flex;
`

const PageLI = styled.li`
    background-color: ${props => props.id};
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    font-size: 1.25em;
    padding: 0.2rem 0.5rem;
    justify-content: center;
    margin: .2rem;
    text-align: center;
    cursor: pointer;
    &:hover{
        border: 1px solid #845957;
    }
`

