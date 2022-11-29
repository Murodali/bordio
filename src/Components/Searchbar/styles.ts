import styled from "styled-components";

export const SearchbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 4px;
background-color: #2D4071;
position: relative;
padding: 10px;
margin: 10px 16px;
`
export const SearchInputImage = styled.img`
    position: absolute;
    right: 10px;
    padding: 0;
    margin: 0;
`

export const Input = styled.input`
background-color: transparent;
width: 100%;
border: none;
outline: none;
color: white;
`
export const InputLight = styled.input`
background-color: transparent;
width: 100%;
border: none;
outline: none;
color: black;
`

export const SearchbarContainerLight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 50px;
background-color: #F5F8FA;
position: relative;
padding: 10px;
margin: 10px 16px;
`