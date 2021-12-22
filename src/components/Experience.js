import React from 'react'
import styled from 'styled-components';
import { ExperienceData } from '../data/experience'
import {WorkCard} from '../components/WorkCard'

export const Experience = () => {
    const Experience = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5% 0 5%; 
    `;

    const WorkList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items; center;
    margin: 14px 0px; `

    const ExperienceTitle = styled.div`
      font-size: 24px;
      padding-top: 3rem;
    `

     const data = ExperienceData;

    return (
        <div id="experience">
        <ExperienceTitle> Experience </ExperienceTitle>
        <Experience>
            <WorkList className="work-list">
                {data.map((item) => {
                    return (
                        <WorkCard item={item}/>
                    )
                })}
            </WorkList>

            </Experience>
            </div>
    )
}
