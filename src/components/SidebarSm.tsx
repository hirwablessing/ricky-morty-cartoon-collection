import styled from "styled-components";
import { deviceSize } from "../utils/mediaQueryBreakpoints";
import Sidebar from "./sidebar";
import { ESCAPE_KEY, useKeyboardKey } from "../utils/useKeyboardKey";

const SidebarContainer = styled.div`
  display: none;

  @media ${deviceSize.tablet} {
    display: flex;
  }

  .container {
    position: absolute;
    z-index: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 85% 15%;
    transition: all 300ms;
    height: calc(100vh - 60px);
    left: 0;
  }

  .sidebar-ctn {
    padding-top: 30px;
    padding-left: 20px;
    background: #e4e4e7;
  }
`;

interface SidebarSmProps {
  closeSidebar: () => void;
}

const SidebarSm = ({ closeSidebar }: SidebarSmProps) => {
  useKeyboardKey({
    callback: () => closeSidebar(),
    keyMatch: ESCAPE_KEY,
  });

  return (
    <SidebarContainer>
      <div className="container">
        <div className="sidebar-ctn">
          <Sidebar closeSidebar={() => closeSidebar()} />
        </div>
      </div>
    </SidebarContainer>
  );
};

export default SidebarSm;
