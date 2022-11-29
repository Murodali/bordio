import { AvatarFIlterColor, AvatarImage } from "./styles";


interface IAvatarProps {
    width:number;
    height:number
    image:string
    color?:boolean;
}

const Avatar = ({width,height,image, color}:IAvatarProps) => {
  return (
    <>
    {color? <AvatarFIlterColor src={image} width={width} height={height} alt="avatar"/> :
    <AvatarImage src={image} width={width} height={height} alt="avatar" />
    }
    </>
  )
}

export default Avatar
