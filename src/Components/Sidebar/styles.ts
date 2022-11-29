import styled from 'styled-components';


export const SidebarContainer = styled.div`
background-color: #0F1D40;
height: 100vh;
padding: 0px;
grid-column-start: first;

`

export const LogoImage = styled.img`
padding: 32px 16px;
`

export const MenuItemWithAvatar = styled.div`
display:flex;
align-items: center;
color: white;
margin: 30px 0;
background-color: #2D4071;
padding: 10px 16px;
&:hover{
    cursor: pointer;
}
`

export const MenuText = styled.p`
    padding: 0;
    margin: 0;
    margin-left: 10px;
`

export const MenuItemWithDropDown = styled.div`
display: flex;
align-items: center;
color:white;
padding: 10px;
&:hover{
    cursor: pointer;
}
`

export const DropdownImage = styled.img`
    padding-left:16px;
`

export const SubmenuLink = styled.p`
    color: #8C939F;
    padding: 10px 16px;
    margin: 18px 0;
    margin: 0;
    &:hover{
        cursor: pointer;
        color: white;
        transition: all ease-in 0.3s;
    }
`