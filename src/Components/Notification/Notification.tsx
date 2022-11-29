import { NotificationContainer, NotificationCount } from './styles'
import notificationIcon from "../../assets/images/bxs-bell 1.svg";

interface INotificationProps {
    count:number
}
const NotificationComponent = ({count}:INotificationProps) => {
  return (
    <NotificationContainer>
        <img src={notificationIcon} alt="notification"/>
        <NotificationCount>{count>=100 ? `99 +` : count}</NotificationCount>
      
    </NotificationContainer>
  )
}

export default NotificationComponent
