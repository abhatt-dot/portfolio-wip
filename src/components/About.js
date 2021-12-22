import React from 'react'
import styled from 'styled-components'
import moon from '../assets/avni.png'
import arrow from '../assets/arrow-204-xxl.png';


export const About = () => {
    const Home = styled.div`
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    height: 100vh;
    padding: 0 10% 0 10%;
    `
    const Text = styled.div`
    font-size: 20px;
    `
    const Photo = styled.img`
    height: 420px; 
    `
    const BigText = styled.div`
    font-size: 240px;
    margin-top: 15rem;
    `
    const Arrow = styled.img`
    width: 30px;
    margin-top: 10rem;
    `
    return (
        <Home id='about'>
            <BigText> AVNI </BigText>
            <Text> Full stack Engineer at Mendeley, Operations at SimplexCode. </Text>
            <a href='#skills'><Arrow src={arrow} alt= "down arrow" /></a>
            {/* <Photo src={moon} alt='sun and moon illustration' /> */}
        </Home>
    )
}
