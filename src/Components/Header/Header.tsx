import React, { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import { HeaderContainer, LeftHeaderSecon, RightHeaderSection } from './styles'
import plusIcon from "../../assets/images/Plus.svg";
import Dropdown from '../Dropdown/Dropdown';
import { dropdowndata } from '../../shared/const/DropdownData';
import { filterdata } from '../../shared/const/FilterData';
import SearchInput from '../Searchbar/Searchbar';
import Avatar from '../Avatar/Avatar';
import avartar from "../../assets/images/Ellipse 1.svg";
import NotificationComponent from '../Notification/Notification';

const Header = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const handleChange =(e:ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value)
    }
  return (
    <HeaderContainer>
        <LeftHeaderSecon>
            <Button text={"Add new"} onClick={()=> {return}} icon={plusIcon}/>
            <Dropdown dropdownData={dropdowndata} />
            <Dropdown dropdownData={filterdata}/>
        </LeftHeaderSecon>
        <RightHeaderSection>
            <SearchInput value={searchInputValue} setValue={setSearchInputValue} onChnage={handleChange} variant="light" />
            <NotificationComponent count={100}/>
            <Avatar image={avartar} width={40} height={40}/>
        </RightHeaderSection>
      
    </HeaderContainer>
  )
}

export default Header
