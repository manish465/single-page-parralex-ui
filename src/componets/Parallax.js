import styled from "styled-components";
import { img1, img2, img3, img4, img5, img6 } from "../assets/svg";
import { ParallaxImage } from "../styles";

const ParallaxContainer = styled.div``;

const Img1 = styled(ParallaxImage)``;
const Img2 = styled(ParallaxImage)``;
const Img3 = styled(ParallaxImage)``;
const Img4 = styled(ParallaxImage)``;
const Img5 = styled(ParallaxImage)``;
const Img6 = styled(ParallaxImage)``;

const Parallax = () => {
    return (
        <ParallaxContainer>
            <Img1 src={img1} />
            <Img2 src={img2} />
            <Img3 src={img3} />
            <Img4 src={img4} />
            <Img5 src={img5} />
            <Img6 src={img6} />
        </ParallaxContainer>
    );
};

export default Parallax;
