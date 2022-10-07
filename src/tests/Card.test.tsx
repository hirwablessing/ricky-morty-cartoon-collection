import { screen } from "@testing-library/react";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";
import Card from "../components/card";
import { renderWithProvider } from "./test-utils";

const SampleCharacter = {
  id: 361,
  name: "Toxic Rick",
  status: "Dead",
  species: "Humanoid",
  type: "Rick's Toxic Side",
  gender: "Male",
  origin: {
    name: "Alien Spa",
    url: "https://rickandmortyapi.com/api/location/64",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/27"],
  url: "https://rickandmortyapi.com/api/character/361",
  created: "2018-01-10T18:20:41.703Z",
};

const Component = () => {
  const history = createMemoryHistory();

  return (
    <Router location={history.location} navigator={history}>
      <Card character={SampleCharacter} />
    </Router>
  );
};

test("renders a character card", () => {
  renderWithProvider(<Component />);

  const card = screen.getAllByRole("card");

  expect(card).toBeTruthy();
});

test("renders a character card with a list of 3 details", () => {
  renderWithProvider(<Component />);

  const details = screen.getAllByRole("detail");

  expect(details).toHaveLength(3);
});

test("renders a character card displaying character prop values", () => {
  renderWithProvider(<Component />);

  const details = screen.getAllByRole("detail");

  expect(details[0].textContent?.trim()).toEqual("Toxic Rick");
  expect(details[1].textContent?.trim()).toEqual("Humanoid");
  expect(details[2].textContent?.trim()).toEqual("Dead");
});

test("renders a character card with a button", () => {
  renderWithProvider(<Component />);

  const button = screen.getAllByRole("button");

  expect(button).toBeTruthy();
});

test("renders a character card with an image", () => {
  renderWithProvider(<Component />);

  const Image = screen.getAllByRole("img");

  expect(Image).toBeTruthy();
});
