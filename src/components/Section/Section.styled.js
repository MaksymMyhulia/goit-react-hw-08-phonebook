import styled from "styled-components"

export const SectionStyled = styled.section`
display: flex;
flex-direction: column;
align-items: center;

padding: ${({theme}) => theme.space[4]}px 0;

width: 600px;
max-width: 100%;

background-color: ${({theme}) => theme.colors.white};
box-shadow: ${({theme}) => theme.shadows.normal};
margin-top: 65px;
margin-left: auto;
margin-right: auto;
`;