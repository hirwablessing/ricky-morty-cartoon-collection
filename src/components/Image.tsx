import styled from "styled-components";
import BackgroundImage from "../assets/rick-morty.png";

interface ImageProps {
  name: string;
  url: string;
  height?: string;
}

const Image = styled.div`
  height: ${(props: { height?: string }) =>
    props.height ? props.height : "130px"};
  background-size: cover;
  background-image: url(${BackgroundImage});

  img {
    height: ${(props: { height?: string }) =>
      props.height ? props.height : "130px"};
    width: 100%;
    object-fit: cover;
  }
`;

const ImageContainer = ({ name, url, height }: ImageProps) => (
  <Image className="img-container" height={height}>
    <img alt={name} src={url} style={{ borderRadius: "15px 15px 0px 0px" }} />
  </Image>
);

export default ImageContainer;
