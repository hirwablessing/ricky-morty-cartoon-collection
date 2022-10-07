import styled from "styled-components";
import ImageContainer from "./Image";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "../styles";
import { Character } from "../types";
import { setCharacter } from "../state/slices/character.slice";
import { deviceSize } from "../utils/mediaQueryBreakpoints";
import { useAppDispatch } from "../state/utils/useDispatch";

const CardContainer = styled.div`
  height: 300px;
  width: 250px;
  border: 1.5px solid #000;

  display: flex;
  border-radius: 15px;
  flex-direction: column;
  background: #fff;
  justify-content: space-between;
  background-color: #d4d4d8;

  .details-list {
    margin: 0;
    padding: 10px;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 3px 4px grey;
  }

  @media ${deviceSize.mobileL} {
    width: 300px;
    .details-list {
      padding: 10px;
    }
  }
`;

interface CardProps {
  character: Character;
}

const Card = ({ character }: CardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDetailSelect = () => {
    dispatch(setCharacter(character));
    navigate(`/episode/${character.id}`);
  };

  return (
    <CardContainer role="card bg-gray-500">
      <ImageContainer name={character.name} url={character.image} />

      <ul className="details-list">
        <li role="detail">
          <Text> {character.name} </Text>
        </li>
        <li role="detail">
          <Text> {character.species} </Text>
        </li>
        <li role="detail">
          <Text> {character.status} </Text>
        </li>
      </ul>

      <div className="w-full">
        <Button
          color="transparent"
          onClick={() => handleDetailSelect()}
          width="100%"
        >
          Details
        </Button>
      </div>
    </CardContainer>
  );
};

export default Card;
