import React from 'react'
import styled from 'styled-components';
import { SkillsData } from '../data/skills'
import { SkillCard } from './SkillCard'


export const Skills = () => {
    const data = SkillsData;
    const Skills = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    `
    const SkillsContainer = styled.div`
    padding: 0 12rem;
    `
    const SkillsSection = styled.div`
    display: flex;
    justify: space-between;
    margin: 12px 0px;
    width: 100%;
    `
    const SkillsTitle = styled.label`
    font-size: 24px; 
    `
    const SkillsList = styled.div`
    display:flex;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: end; 
    `
    return (
        <Skills className="skills" id="skills">
            <SkillsTitle className="section-title">Tech Stack </SkillsTitle>
            <SkillsContainer className="skills-container">
                {data.map((item) => {
                    return (
                <SkillsSection className="skills-section">
                    <SkillsList className="skills-list">
                        {item.list.map((skill) => {
                            return <SkillCard skill={skill} />;
                        })}
                    </SkillsList>
                    </SkillsSection>
                    );
                })}
            </SkillsContainer>
        </Skills>
    )
}
