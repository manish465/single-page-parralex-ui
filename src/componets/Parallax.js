import { useEffect } from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { img1, img2, img3, img4, img5, img6 } from "../assets/svg";

const ParallaxContainer = styled.div``;

const ParallaxImage = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Parallax = () => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, 5]);
    const y2 = useTransform(scrollY, [0, 600], [0, 10]);
    const y3 = useTransform(scrollY, [0, 600], [0, 25]);
    const y4 = useTransform(scrollY, [0, 600], [0, 50]);
    const y5 = useTransform(scrollY, [0, 600], [0, 100]);
    const y6 = useTransform(scrollY, [0, 600], [0, 200]);
    return (
        <ParallaxContainer>
            <ParallaxImage style={{ y: y1 }} src={img1} />
            <ParallaxImage style={{ y: y2 }} src={img2} />
            <ParallaxImage style={{ y: y3 }} src={img3} />
            <ParallaxImage style={{ y: y4 }} src={img4} />
            <ParallaxImage style={{ y: y5 }} src={img5} />
            <ParallaxImage style={{ y: y6 }} src={img6} />
        </ParallaxContainer>
    );
};

export default Parallax;
