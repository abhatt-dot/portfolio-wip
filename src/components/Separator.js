import React from 'react'
import styled from 'styled-components';

export const Separator = () => {

    const Separator = styled.div`
    background-image: linear-gradient(to right top, #7e57c5, #7a69cf, #7879d7, #7888dd, #7c96e2, #79a1e8, #78abec, #79b5f0, #70bff5, #68c8f9, #63d1fb, #61dafb);
    height: 6px;
    width: 100%;
    border-radius: 3px;
    margin: 16px 0px; 
    `
    return (
        <Separator/>
    )
}
