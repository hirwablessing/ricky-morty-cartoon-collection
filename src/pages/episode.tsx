import styled from "styled-components";
import Header from "../components/header";
import EpisodeDetails from "../components/EpisodeDetails";
import CharacterDetails from "../components/CharacterDetails";
import { useParams } from "react-router-dom";
import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";
import { RootState } from "../state";
import { useEffect } from "react";
import { getSingleCharacter } from "../state/actions/character.action";
import { deviceSize } from "../utils/mediaQueryBreakpoints";
import { useAppDispatch } from "../state/utils/useDispatch";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 0 2rem;
  padding: 10px;
  margin-top: 30px;
  max-width: 1500px;
  margin: 0 auto;

  height: calc(100vh - 90px);
  overflow: auto;

  .episode-tabs {
    margin-top: 48px;
  }

  @media ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    .navigation-ctn {
      justify-content: flex-start;
    }
  }
`;

// EDGE CASE: HANDLE SCENARIOS WHERE A USER NAVIGATES TO A NEW PAGE AND REFRESHES WHICH CLEARS OUT THE DATA

export default function Episode() {
  const { character, loading } = useSelector(
    (state: RootState) => state.characters
  );
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!character.name) {
      dispatch(getSingleCharacter(parseInt(id?.toString() || "")));
    }
  }, [id, dispatch, character.name]);

  return (
    <div>
      <Header showMenu={false} />

      {character.name && (
        <GridContainer>
          <div className="details">
            <section>
              <CharacterDetails character={character} isloading={loading} />
            </section>

            <section className="episode-tabs">
              <div
                style={{
                  overflowX: "auto",
                }}
              >
                <Tabs episodes={character.episode} />
              </div>

              <div style={{ paddingLeft: "10px" }}>
                <EpisodeDetails />
              </div>
            </section>
          </div>
        </GridContainer>
      )}
    </div>
  );
}
