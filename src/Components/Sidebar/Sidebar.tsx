import { DropdownImage, LogoImage, MenuItemWithAvatar, MenuItemWithDropDown, MenuText, SidebarContainer, SubmenuLink } from './styles'
import logo from "../../assets/images/bordio-logo.svg";
import { ChangeEvent, useState } from 'react';
import SearchInput from '../Searchbar/Searchbar';
import avartar from "../../assets/images/Ellipse 1.svg";
import Avatar from '../Avatar/Avatar';
import dropdownIcon from "../../assets/images/Контур 621.svg";

 
const Sidebar = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleChange =(e:ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
  return (
    <SidebarContainer>
        <LogoImage src={logo} alt="logo image"/>
      <SearchInput value={searchValue} setValue={setSearchValue} onChnage={handleChange} variant="dark"/>
      <MenuItemWithAvatar>
      <Avatar image={avartar} width={22} height={22} />
      <MenuText>My workspace</MenuText>
      </MenuItemWithAvatar>
      <MenuItemWithDropDown>
      <DropdownImage src={dropdownIcon} alt="dropdown icon"/>
      <MenuText>Favorites</MenuText>
      </MenuItemWithDropDown>
      <SubmenuLink>Marketing</SubmenuLink>
      <SubmenuLink>Mobile App</SubmenuLink>

      <MenuItemWithDropDown>
      <DropdownImage src={dropdownIcon} alt="dropdown icon"/>
      <MenuText>My Projects</MenuText>
      </MenuItemWithDropDown>
      <SubmenuLink>Marketing</SubmenuLink>
      <SubmenuLink>Landing Pages</SubmenuLink>
      <SubmenuLink>Wedding</SubmenuLink>
      <SubmenuLink>Mobile App</SubmenuLink>
      <SubmenuLink>House Construction</SubmenuLink>
      


    </SidebarContainer>
  )
}

export default Sidebar
