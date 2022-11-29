import { useState } from 'react'
import { ButtonIcon } from '../Button/styles'
import { DropdownComponent, DropdownContainer, DropdownLabelText, DropdownList, DropdownListOption } from './styles'
import arrowDown from "../../assets/images/Arrows.svg";
import arrowUp from "../../assets/images/ArrowsUp.svg";


interface IDropdownProps {
    dropdownData: string[]
}

const Dropdown = ({dropdownData}:IDropdownProps) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [selectedDropdownItem, setSelectedDropdownItem] = useState(dropdownData[0])
    const handleDropdown =() => {
        setIsDropdownActive(!isDropdownActive)
    }

    const handleSelectedDropdown =(item:string)=> {
        setSelectedDropdownItem(item);
        setIsDropdownActive(!isDropdownActive)
        
    }
  return (
    <DropdownComponent>
        <DropdownContainer onClick={()=> setIsDropdownActive(!isDropdownActive)} onBlur={()=> setIsDropdownActive(!isDropdownActive)}>
            <DropdownLabelText>{selectedDropdownItem}</DropdownLabelText>
            <ButtonIcon src={isDropdownActive? arrowUp : arrowDown} alt="button icon" />
      
      </DropdownContainer>

      {isDropdownActive && <DropdownList>
        {
            dropdownData.map((item,index)=> (
                <DropdownListOption key={index} onClick={()=> handleSelectedDropdown(item)} onBlur={()=> setIsDropdownActive(!isDropdownActive)}>
                    <DropdownListOption>{item}</DropdownListOption>
                </DropdownListOption>
            ))
        }
        </DropdownList>}
    </DropdownComponent>

  )
}

export default Dropdown
