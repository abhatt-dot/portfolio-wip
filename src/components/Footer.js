import React from 'react';
import styled from 'styled-components';


export const Footer = () => {
    const Footer = styled.div`
    display:flex;
    justify-content: space-between;
    min-width: 100vh;
    padding: 0 2rem 0 2rem;
    `
    const Link = styled.div`
    padding: 4px;
    `
    const Img = styled.img`
    width: 40px; 
    `
    const Text = styled.div`
      padding: 12px;
      position: relative;
    `
    return (
        <Footer id="contact">
            <Text> ©Avni ✨ 2021 </Text>
            <Link> <a href='https://uk.linkedin.com/in/avni-bhatt-ab2824145' target="_blank"  rel="noreferrer"> <Img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin"/> </a> </Link>
        </Footer>
    )
}
