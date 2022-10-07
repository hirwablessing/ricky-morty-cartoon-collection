import styled from "styled-components";
import { Character } from "../types";
import { deviceSize } from "../utils/mediaQueryBreakpoints";
import { Text } from "../styles/";

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  .details-list {
    list-style: none;

    li {
      margin: 1rem 0;
    }
  }

  .list-text {
    width: 100%;
  }

  img {
    height: 350px;
    object-fit: contain;
  }

  @media ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    img {
      width: 400px;
      height: 250px;
      object-fit: cover;
    }

    .details-list {
      margin: 0;
      padding: 0;
      display: flex;
      gap: 30px;
      justify-content: center;
      align-items: center;
    }

    .img-container {
      display: flex;
      justify-content: center;
    }
  }
`;

interface CharacterDetailsProps {
  character: Character;
  isloading: boolean;
}

const CharacterDetails = ({ character, isloading }: CharacterDetailsProps) => (
  <DetailsGrid>
    {isloading ? (
      <Text>Loading...</Text>
    ) : (
      <>
        <div className="img-container">
          <img
            alt={`${character.name} cover`}
            style={{ borderRadius: "10px" }}
            src={character.image}
          />
        </div>

        <ul className="details-list">
          {/* <li>
        <Text> {character.id} </Text>
      </li> */}
          <div className="list-text">
            <li>
              <Text> {character.name} </Text>
            </li>
            <li>
              <Text> {character.status} </Text>
            </li>
            <li>
              <Text> {character.species} </Text>
            </li>
          </div>

          <div className="list-text">
            <li>
              <Text> {character.type} </Text>
            </li>
            <li>
              <Text> {character.gender} </Text>
            </li>
            <li>
              <Text> {character.origin.name} </Text>
            </li>
            <li className="last-list">
              <Text> {new Date(character.created).toLocaleDateString()} </Text>
            </li>
          </div>
        </ul>
      </>
    )}
  </DetailsGrid>
);

export default CharacterDetails;
