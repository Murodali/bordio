import { useState } from "react";
import { toobarMenu } from "../../shared/const/ToolbarData";
import Avatar from "../Avatar/Avatar";
import { MenuText } from "../Sidebar/styles";
import {
  Titletext,
  ToolbarContainer,
  ToolbarMenuItem,
  ToolbarMenuSelected,
} from "./styles";

const Toolbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <ToolbarContainer>
      <Titletext>Tools</Titletext>
      {toobarMenu.map((item, index) =>
        selectedMenu === index ? (
          <ToolbarMenuSelected
            key={index}
            onClick={() => setSelectedMenu(index)}
          >
            <Avatar
              image={item.icon}
              width={22}
              height={22}
              color={selectedMenu === index ? true : false}
            />
            <MenuText>{item.title}</MenuText>
          </ToolbarMenuSelected>
        ) : (
          <ToolbarMenuItem key={index} onClick={() => setSelectedMenu(index)}>
            <Avatar
              image={item.icon}
              width={22}
              height={22}
              color={selectedMenu === index ? true : false}
            />
            <MenuText>{item.title}</MenuText>
          </ToolbarMenuItem>
        )
      )}
    </ToolbarContainer>
  );
};

export default Toolbar;
