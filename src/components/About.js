import React from 'react'
import styled from 'styled-components'
import moon from '../assets/avni.png'

export const About = () => {
    const Home = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
    const Text = styled.div`
    font-size: 20px;
    `
    const Photo = styled.img`
    height: 420px; 
    `
    const Name = styled.span`
    color: blueviolet;
    font-size: 24px; 
    `
    return (
        <Home id='about'>
            <Text> Hello! I'm <Name> Avni ✨ </Name>. I'm a junior web developer and volunteer code instructor. Currently, I'm a front-end engineer at Mendeley. </Text>
            <Photo src={moon} alt='sun and moon illustration' />
        </Home>
    )
}
