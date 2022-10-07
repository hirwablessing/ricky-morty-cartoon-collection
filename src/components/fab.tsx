import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Text } from "../styles/";
import { deviceSize } from "../utils/mediaQueryBreakpoints";

const FABContainer = styled.div`
  border: 1.5px solid transparent;
  background: #3f3f46;
  border-radius: 30%;
  width: 40px;
  height: 40px;

  display: none;
  place-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: -20px;
  margin-right: 20px;
  margin-bottom: 10px;
  .up-arrow {
    height: 30px;
  }

  .up-arrow {
    font-size: 20px;
    color: #fff;
  }

  @media ${deviceSize.tablet} {
    display: flex;
  }
`;

const FAB = () => (
  <FABContainer
    onClick={() => {
      document.getElementById("characters")?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
  >
    <Text>
      <span className="up-arrow">
        <AiOutlineArrowUp />
      </span>
    </Text>
  </FABContainer>
);

export default FAB;
