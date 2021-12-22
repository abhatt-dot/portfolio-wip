import React from 'react'
import styled from 'styled-components';
import person from '../assets/person.jpg';

export const Bio = () => {

    const Bio = styled.div`
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${person});
    width: 100%;
    height: 500px;
    `
    const Text = styled.div`
    font-size: 20px;
    margin-left: auto;
    margin-right: auto; 
    background-color: #4F4F4F;
    padding: 2rem;
    width: 45%;
    line-height: 1.8
    `
    const Space = styled.div`
    padding-top: 1rem;
    `
    return (
        <Bio className="skills" id="skills">
            <Text>
                Hi, I'm Avni. 
                Currently, I work predominantly with React-Redux and Javascript, although in the past I've used both Python and Java. 

                Outside of my day job, I lead Operations at SimplexCode, a non-profit that helps people get into coding. 

                In my free time, you can probably find me hiding somewhere with a book or practising yoga. 
                <Space>While I'm not currently searching for opportunities, if you think I might be a good fit for your company please feel free to send me a message on LinkedIn. As a Biochemistry graduate, anything that combines both science and technology generally piques my interest! </Space>
            </Text>
        </Bio>
    )
}
