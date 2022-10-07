import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../state";
import { Text } from "../styles/";

const Details = styled.div`
  list-style: none;

  li {
    margin: 1rem 0;
  }
`;

const EpisodeDetails = () => {
  const { episode } = useSelector((state: RootState) => state.episodes);

  return (
    <Details>
      <li>
        <Text> {episode.id}</Text>
      </li>
      <li>
        <Text> {episode.name}</Text>
      </li>
      <li>
        <Text> {new Date(episode.air_date).toLocaleDateString()} </Text>
      </li>
      <li>
        <Text> {episode.episode}</Text>
      </li>
    </Details>
  );
};

export default EpisodeDetails;
