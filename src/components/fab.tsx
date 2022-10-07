import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Text } from "../styles/";

const FABContainer = styled.div`
  border: 1.5px solid transparent;
  background: #3f3f46;
  border-radius: 30%;
  width: 40px;
  height: 40px;

  position: absolute;
  bottom: 0;
  right: -20px;
  margin-right: 20px;
  margin-bottom: 10px;

  .up-arrow {
    height: 20px;
    width: 20px;
    color: #fff;
    border: 1px solid transparent;
    display: flex;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
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
