import styled from "styled-components";

export const TaskContainer = styled.div`
`

export const TaskContent = styled.div`
background-color: ${props => props.color};
border-radius: 8px;
padding: 8px;
margin: 10px;
cursor: grab;
`

export const TaskDiv = styled.p`
padding: 10px;
margin: 0 10px;
`

export const TaskTime = styled.p`
font-size: 12px;
padding:  0 16px;
margin: 0;
`

export const LineThroughText = styled.div`
text-decoration: line-through;
padding: 10px;
margin: 0 10px;
`