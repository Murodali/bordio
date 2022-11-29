import styled from "styled-components";

export const ToolbarContainer = styled.div`
height: 100vh;
background-color: #F5F8FA;
padding: 0 16px 0 0;
grid-column-start: second;

`

export const Titletext =styled.h2`
padding:0;
margin: 24px 16px;

`

export const ToolbarMenuItem = styled.div`
display: flex;
align-items: center;
padding: 10px;
color: black;
margin: 10px 0;
&:hover{
    cursor: pointer;
    color: #0094FF;
    border-left: 2px solid #0094FF;
background-color: white;
border-radius: 0px 8px 8px 0px;
}
`

export const ToolbarMenuSelected = styled.div`
display: flex;
align-items: center;
padding: 10px;
color: #0094FF;
border-left: 2px solid #0094FF;
background-color: white;
border-radius: 0px 8px 8px 0px;
margin: 10px 0;
&:hover{
    cursor: pointer;
}
`