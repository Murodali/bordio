import styled from "styled-components";

export const ColumnContainer = styled.div`
background-color: white;
width: 100%;
height: 100%;
`

export const Columntext = styled.p`
text-align: center;
padding: 10px;
font-weight: 12px;
display: flex;
align-items: center;
color : ${props => props.color};
display: flex;
justify-content: center;

`

export const AddImgIcon = styled.img`
margin: 0 10px;
padding: 4px;
&:hover{
    cursor: pointer;
}
`

export const Circle = styled.div`
border-radius: 50%;
padding: 2px 9px;
background-color: #E8EBEF;
display: inline-block;
margin: 0 10px;
`

export const ColumnContent = styled.div`
border-left: 1px solid #F3F3F3;
border-right:  1px solid #F3F3F3;
border-top: 2px solid #F3F3F3;
margin-top: 0;
`

export const TasksContainer = styled.div``