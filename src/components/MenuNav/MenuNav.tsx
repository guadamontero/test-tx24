import { colors, sizes } from "../../theme";
import { MenuContainer, ItemContainer, ItemText } from "./MenuNav.styles";
import DashboardIcon from "../icons/DashboardIcon";
import BellIcon from "../icons/BellIcon";
import HelpIcon from "../icons/HelpIcon";
import logo from "../../assets/logo.svg";

const MenuNav = () => {
  return (
    <MenuContainer>
      <div className="row w-100">
        <div className="col">
          <img src={logo} alt="logoTX24" style={{ width: "60px" }} />
        </div>
        <div className="col-auto">
          <div className="row">
            <div className="col">
              <ItemContainer>
                <DashboardIcon size={sizes.iconSize} color={colors.gray} />
                <ItemText>Dashboard</ItemText>
              </ItemContainer>
            </div>
            <div className="col">
              <ItemContainer>
                <BellIcon size={sizes.iconSize} color={colors.gray} />
                <ItemText>Messages</ItemText>
              </ItemContainer>
            </div>
            <div className="col">
              <ItemContainer>
                <HelpIcon size={sizes.iconSize} color={colors.gray} />
                <ItemText>Help</ItemText>
              </ItemContainer>
            </div>
          </div>
        </div>
      </div>
    </MenuContainer>
  );
};

export default MenuNav;
