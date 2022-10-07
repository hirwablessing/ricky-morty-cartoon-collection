import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../state";
import { getEpisodeDetails } from "../state/actions/episode.action";
import { setCurrentEpisode } from "../state/slices/episode.slice";
import { useAppDispatch } from "../state/utils/useDispatch";
import { deviceSize } from "../utils/mediaQueryBreakpoints";

const Tabs = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #000;
  width: 80em;
`;

const Tab = styled.li`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: center;
  border: ${(props: { active: boolean }) =>
    props.active ? "2px solid #000" : "1px solid #000"};
  margin-bottom: 1px;
  height: 35px;
  transition: all 300ms;
  margin-left: 5px;
  padding: 20px;
  background: #d4d4d8;
  font-weight: ${(props: { active: boolean }) => props.active && "bold"};

  &:hover {
    cursor: pointer;
    background: #3f3f46;
    color: #fff;
  }

  @media ${deviceSize.mobileL} {
    font-size: 13px;
  }
`;

interface EpisodeTabsProps {
  episodes: Array<string>;
}

const EpisodeTabs = ({ episodes }: EpisodeTabsProps) => {
  const dispatch = useAppDispatch();
  const { currentEpisodeTab } = useSelector(
    (state: RootState) => state.episodes
  );

  const handleTabChange = (index: number) => {
    dispatch(setCurrentEpisode(index));
  };

  useEffect(() => {
    dispatch(getEpisodeDetails({ episodeId: currentEpisodeTab }));
  }, [currentEpisodeTab, dispatch]);

  return (
    <Tabs>
      {episodes?.slice(0, 5).map((_, index: number) => {
        return (
          <Tab
            key={index}
            onClick={() => handleTabChange(index + 1)}
            active={currentEpisodeTab === index + 1}
          >
            Episode {index + 1}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default EpisodeTabs;
