
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Input, InputLight, SearchbarContainer, SearchbarContainerLight, SearchInputImage } from './styles'
import searchIcon  from "../../assets/images/Search.svg";


interface ISearchInputPops {
    value:string;
    setValue: Dispatch<SetStateAction<string>>
    onChnage:(e:ChangeEvent<HTMLInputElement>)=> void;
    variant: "dark" | "light";
}

const SearchInput = ({value,setValue,onChnage,variant}:ISearchInputPops) => {

  return (
    <>
    {variant==="dark" ? <SearchbarContainer>
      <Input placeholder='Search...' value={value} onChange={onChnage}/>
      <SearchInputImage src={searchIcon} alt="search icon" />
    </SearchbarContainer> : <SearchbarContainerLight> <InputLight placeholder='Search...' value={value} onChange={onChnage}/>
      <SearchInputImage src={searchIcon} alt="search icon" /></SearchbarContainerLight>}
    </>
    
  )
}

export default SearchInput
