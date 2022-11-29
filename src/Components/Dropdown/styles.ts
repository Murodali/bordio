import styled from "styled-components";

export const DropdownContainer = styled.div`
display:flex;
align-items:center;
background-color: #F5F8FA;
padding: 4px 20px;
border-radius: 50px;
color: black !important;
&:hover{
    cursor: pointer;
}
`

export const DropdownList = styled.div`
background-color: white;
margin-top: 10px;
position: absolute;
border-radius: 8px;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
padding: 6px;
width: max-content;

`

export const DropdownListOption = styled.div`
padding: 8px;
border-radius: 4px;
&:hover{
    cursor: pointer;
    background-color: #F5F8FA ;
}
`

export const DropdownLabelText = styled.p`
color: black;
`

export const DropdownComponent = styled.div`
position:relative;
margin:0 10px;  
`