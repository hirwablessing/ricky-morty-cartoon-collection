import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  font-size: 16px;
  background-color: #3f3f46;
  width: 100%;
  border-radius: 0 0 15px 15px;
  width: ${(props: { width?: string }) => props.width};
  color: ${(props: { color?: string }) =>
    props.color === "transparent" ? "white" : props.color};
  border: 1px solid ${(props: { color?: string }) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: ${(props: { text?: string }) => props.text};
  width: 100%;
`;

export const UlList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: ${(props: { flexDirection: string }) => props.flexDirection};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ListItem = styled.li`
  background: ${(props: { color: string }) => props.color};
`;

export const TextInputContainer = styled.form`
  height: 45px;
  width: 95%;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  background: transparent;

  span {
    font-size: 20px;
    padding-right: 6px;
  }

  input {
    background: transparent;
    border: 0;
    height: 30px;
    width: 100%;
    margin-right: 6px;
    font-size: 16px;

    &:focus {
      outline: 0px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectContainer = styled.select`
  width: 95%;
  height: 40px;
  // padding: 6px;
  border-radius: 15px;
  background: transparent;
  border: 1px solid #000;

  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  margin: 0;
  box-sizing: border-box;
  -webkit-appearance: none;

  &:focus {
    outline: 0px;
  }

  background-image: linear-gradient(45deg, transparent 50%, #fff 50%),
    linear-gradient(135deg, #fff 50%, transparent 50%),
    linear-gradient(to right, #3f3f46, #3f3f46);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;
`;
