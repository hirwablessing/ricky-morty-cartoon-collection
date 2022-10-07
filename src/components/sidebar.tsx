import { useCallback, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { getCharacters } from "../state/actions/character.action";
import { debounce } from "../utils/debounce";
import { SelectContainer, TextInputContainer } from "../styles";
import { BACKSPACE_KEY, useKeyboardKey } from "../utils/useKeyboardKey";
import styled from "styled-components";
import { useSignal } from "@preact/signals-react";
import { useAppDispatch } from "../state/utils/useDispatch";

const SelectDivContainer = styled.div`
  display: flex;
  align-items: center;
`;
interface SidebarProps {
  closeSidebar?: Function;
}

const Sidebar = ({ closeSidebar }: SidebarProps) => {
  const characterName = useSignal<string>("");
  const status = useSignal<string>("stat");
  const gender = useSignal<string>("gen");
  const dispatch = useAppDispatch();

  const fetchFilteredResult = (name?: string) => {
    dispatch(
      getCharacters({
        status: status.value !== "stat" && status.value,
        gender: gender.value !== "gen" && gender.value,
        name,
      })
    );
  };

  const filterByName = useCallback(
    (name: string) => {
      if (name.length > 2) {
        debounce(() => {
          // @ts-ignore
          dispatch(getCharacters({ name }));
        })();
      }
    },
    [dispatch]
  );

  // watches changes in select fields
  useEffect(() => {
    fetchFilteredResult(characterName.value);
  }, [gender, status.value]);

  useEffect(
    () => filterByName(characterName.value),
    [characterName.value, filterByName]
  );

  useKeyboardKey({
    keyMatch: BACKSPACE_KEY,
    callback: () => {
      if (characterName.value.length <= 1) {
        fetchFilteredResult();
      }
    },
  });

  return (
    <div className="p-[10px]">
      <TextInputContainer
        onSubmit={(e) => {
          e.preventDefault();
          filterByName(characterName.value);
        }}
      >
        <span>
          <FiSearch />
        </span>
        <input
          value={characterName.toString()}
          onChange={(e) => (characterName.value = e.target.value)}
          placeholder="Filter By Name"
        />
      </TextInputContainer>

      <br />

      <SelectDivContainer>
        <SelectContainer
          aria-label="Filter-By-Status"
          defaultValue={status.toString()}
          onChange={(e) => {
            status.value = e.target.value;

            debounce(() => {
              if (closeSidebar) closeSidebar();
            }, 500)();
          }}
        >
          <option value="stat" disabled hidden>
            Status
          </option>

          <option value="unkown">Unkown</option>

          <option value="alive">Alive</option>

          <option value="dead">Dead</option>
        </SelectContainer>
      </SelectDivContainer>

      <br />
      <SelectDivContainer>
        <SelectContainer
          aria-label="Filter-By-gender"
          defaultValue={gender.toString()}
          onChange={(e) => {
            gender.value = e.target.value;

            debounce(() => {
              if (closeSidebar) closeSidebar();
            }, 500)();
          }}
        >
          <option value="gen" disabled hidden>
            Gender Filter
          </option>

          <option value="unknown">Unknown</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </SelectContainer>
      </SelectDivContainer>
    </div>
  );
};

export default Sidebar;
