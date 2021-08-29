import React from 'react'
import styled from 'styled-components';

export const WorkCard = ({ item }) => {
    const WorkCard = styled.div`
    padding: 8px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
    const Logo = styled.img`
    height: 80px;
    padding: 1em;
    `
    const Info = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column; 
    `
    const Date = styled.div`
    color: gray;
    `

    const Desc = styled.div`
    text-align: left;
    `
    return (
        <WorkCard>
            <Logo src={item.companyLogo} alt="logo" />
            <Info>
                <label> {item.company} </label>
                <Date> <label> {item.dateJoined} </label>-<label> {item.dateLeft} </label></Date>
                <Desc> {item.description} </Desc>
            </Info>
        </WorkCard>
    )
}
