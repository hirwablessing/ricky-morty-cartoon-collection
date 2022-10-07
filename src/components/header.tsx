import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { deviceSize } from "../utils/mediaQueryBreakpoints";
import { Link } from "react-router-dom";
import SidebarSm from "./SidebarSm";
import { useLocation } from "react-router-dom";
import { useSignal } from "@preact/signals-react";

const Head = styled.header`
  nav {
    height: 90px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: #d4d4d8;

    .menu-ctn {
      display: none;
    }

    .navigation-ctn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;

      span {
        font-size: 20px;
      }

      p {
        font-size: 20px;
        padding-top: 2px;
        margin: 0;
      }
    }

    .back-btn {
      display: flex;
      align-items: center;
      gap: 60px;
    }

    img {
      height: 50px;
      width: 300px;
      margin-top: 5px;
      object-fit: cover;
    }

    @media ${deviceSize.tablet} {
      justify-content: space-between;

      img {
        height: 40px;
        width: 200px;
        margin-top: 10px;
      }

      .menu-ctn {
        padding-left: 10px;
        display: flex;
        font-size: 35px;
        display: flex;
        place-items: center;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

interface HeaderProp {
  showMenu: boolean;
}

const Header = ({ showMenu }: HeaderProp) => {
  const isSidebarOpen = useSignal<boolean>(false);
  const location = useLocation();

  return (
    <Head>
      <nav>
        <div className="menu-ctn">
          {showMenu && (
            <div role="menu-icon">
              <FiMenu
                role="menu-icon"
                onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
              />
            </div>
          )}
        </div>

        <div role="navigation-item" className="back-btn">
          {location.pathname !== "/" && (
            <Link to="/" className="back">
              <div className="navigation-ctn">
                <span>
                  <BiArrowBack />
                </span>
                <p> Back </p>
              </div>
            </Link>
          )}
          <Link to="/">
            <img
              role="rickLogo"
              alt="Rick and Morty logo"
              src={require("../assets/rick-morty.png")}
            />
          </Link>
        </div>

        {/* visually hidden element */}
        <p role="navigation-item" style={{ color: "#fff" }}>
          {" "}
          .{" "}
        </p>
      </nav>

      {isSidebarOpen.value && (
        <SidebarSm closeSidebar={() => (isSidebarOpen.value = false)} />
      )}
    </Head>
  );
};

export default Header;
