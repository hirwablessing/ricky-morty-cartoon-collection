import styled from "styled-components";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { useEffect, useMemo } from "react";
import { UlList } from "../styles";
import { getCharacters } from "../state/actions/character.action";
import { createPaginationRange } from "../utils/paginationRange";
import { deviceSize } from "../utils/mediaQueryBreakpoints";
import { usePageMatch } from "../utils/usePageMatch";
import { useSignal } from "@preact/signals-react";
import { useAppDispatch } from "../state/utils/useDispatch";

const Paginate = styled.div`
  display: flex;
  justify-content: center;

  .pagination-container {
    border: 1px solid #7d7d80;
    border-radius: 8px;
    height: 50px;
    display: flex;
    flex-direction: row;
  }
`;

const PaginationItem = styled.li`
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #7d7d80;
  border-left: 1px solid #7d7d80;
  font-size: 18px;
  background-color: ${(props: { active?: boolean }) =>
    props.active ? "#3f3f46" : "#d4d4d8"};
  color: ${(props: { active?: boolean }) =>
    props.active ? "#fff" : "#3f3f46"};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    background-color: #3f3f46;
    color: #fff;
  }

  @media ${deviceSize.tablet} {
    &:hover {
      cursor: pointer;
      background-color: transparent;
      color: #3f3f46;
    }
  }
`;

interface PaginatorProps {
  itemSize: number;
}

const Paginator = ({ itemSize }: PaginatorProps) => {
  const isMobile = usePageMatch(deviceSize.tablet);

  const currentPage = useSignal(1);
  const dispatch = useAppDispatch();

  const paginators = useSignal([0, 9]); // sequence of paginator numbers

  const paginationRange = useSignal(
    createPaginationRange(paginators.value[0], paginators.value[1])
  );

  const responsiveEndValue = useMemo(() => (isMobile ? 3 : 9), [isMobile]);

  useEffect(() => {
    if (isMobile) {
      paginators.value = [0, 3];

      return;
    }

    paginators.value = [0, 9];
  }, [isMobile]);

  useEffect(() => {
    dispatch(getCharacters({ currentPage: currentPage.value }));
  }, [currentPage.value]);

  useEffect(() => {
    if (currentPage.value === paginationRange.value[0] + 1) {
      paginators.value = [
        paginators.value[0] === 0
          ? 0
          : paginators.value[0] - responsiveEndValue,

        paginators.value[1] === responsiveEndValue
          ? responsiveEndValue
          : paginators.value[1] - responsiveEndValue,
      ];
    }

    if (
      currentPage.value ===
      paginationRange.value[paginationRange.value.length - 1] + 1
    ) {
      paginators.value = [
        paginators.value[0] + responsiveEndValue,
        paginators.value[1] + responsiveEndValue,
      ];
    }
  }, [currentPage.value]);

  useEffect(() => {
    paginationRange.value = createPaginationRange(
      paginators.value[0],
      paginators.value[1]
    );
  }, [paginators]);

  return (
    <Paginate>
      <div className="pagination-container">
        <PaginationItem
          onClick={() => {
            currentPage.value =
              currentPage.value > 1 ? currentPage.value - 1 : currentPage.value;
          }}
        >
          <FiChevronsLeft />
        </PaginationItem>

        <UlList flexDirection="row">
          {paginationRange.value.map((item, index: number) => (
            <PaginationItem
              key={index}
              active={item + 1 === currentPage.value}
              onClick={() => (currentPage.value = item + 1)}
              className="pagination-item"
            >
              {item + 1}
            </PaginationItem>
          ))}
        </UlList>

        <PaginationItem
          onClick={() =>
            currentPage.value < itemSize
              ? currentPage.value + 1
              : currentPage.value
          }
        >
          <FiChevronsRight />
        </PaginationItem>
      </div>
    </Paginate>
  );
};
export default Paginator;
