import { ButtonContainer, ButtonIcon, ButtonLabel } from "./styles";

interface IButtonProps {
    text:string;
    icon:string;
    onClick:()=> void
}

const Button = ({text,icon, onClick}:IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
        <ButtonIcon src={icon} alt="button icon" />
        <ButtonLabel>{text}</ButtonLabel>
      
    </ButtonContainer>
  )
}

export default Button;
