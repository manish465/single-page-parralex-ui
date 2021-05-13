import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const BannerContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BannerHeading = styled(motion.h1)`
    font-size: 4.5rem;
    color: #2c0c19;
`;

const BannerButton = styled(motion.button)`
    cursor: pointer;
    background: #2c0c19;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 40px;
    color: #ffe6c1;
    box-shadow: 3px 3px 17px black;
    font-weight: bold;
    &:hover {
        color: #2c0c19;
        background-color: #ffe6c1;
    }
`;

const Banner = () => {
    const { scrollY } = useViewportScroll();
    const x1 = useTransform(scrollY, [0, 600], [0, 200]);
    const x2 = useTransform(scrollY, [0, 600], [0, -200]);
    return (
        <BannerContainer>
            <BannerHeading style={{ x: x1 }}>
                Do Your Own Research
            </BannerHeading>
            <BannerButton style={{ x: x2 }}>Get Started</BannerButton>
        </BannerContainer>
    );
};

export default Banner;
