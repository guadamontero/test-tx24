import styled from "styled-components";
import { Text, colors, sizes } from "../theme";
import DashboardIcon from "../components/icons/DashboardIcon";
import BellIcon from "../components/icons/BellIcon";
import HelpIcon from "../components/icons/HelpIcon";

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemText = styled.span`
  padding-left: 0.25rem;
`;

const TradePage: React.FC = () => {
  return (
    <MenuContainer>
      <div className="row w-100">
        <div className="col">
          <Text fontWeight="bold">TX24</Text>
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

export default TradePage;
