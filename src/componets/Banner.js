import styled from "styled-components";

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

const BannerHeading = styled.h1`
    font-size: 4.5rem;
    color: #2c0c19;
`;

const BannerButton = styled.button`
    cursor: pointer;
    background: #2c0c19;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 40px;
    color: #ffe6c1;
    box-shadow: 3px 3px 17px black;
`;

const Banner = () => {
    return (
        <BannerContainer>
            <BannerHeading>Do Your Won Research</BannerHeading>
            <BannerButton>Get Started</BannerButton>
        </BannerContainer>
    );
};

export default Banner;
