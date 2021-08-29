import React from 'react'
import styled from 'styled-components';

export const SkillCard = ({ skill }) => {
    const SkillCard = styled.div`
    width: max-content;
    display:flex;
    flex-direction: column;
    justify-content: end;
    `
    const SkillIcon = styled.svg`
    transform: scale(0.5);
    `
    return (
        <SkillCard>
            <SkillIcon> {skill.icon} </SkillIcon>
            <label> {skill.name} </label>
        </SkillCard>
    )
}
