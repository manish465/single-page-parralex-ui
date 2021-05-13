import styled, { css } from "styled-components";

const AppBarContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px;
    z-index: 1000;
`;

const AppBarLogo = styled.h1`
    color: #2c0c19;
    font-size: 2.3rem;
    font-weight: bold;
    cursor: pointer;
`;

const AppBarLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const AppBarLink = styled.div`
    color: #2c0c19;
    margin-right: 20px;
    cursor: pointer;
    ${({ primary }) =>
        primary &&
        css`
            color: #ffe6c1;
            background-color: #2c0c19;
            padding: 5px 20px;
            border-radius: 20px;
            box-shadow: 3px 3px 17px black;
        `}

    &:hover {
        border-bottom: 4px double #2c0c19;

        ${({ primary }) =>
            primary &&
            css`
                border-bottom: none;
                color: #2c0c19;
                background-color: #ffe6c1;
            `}
    }
`;

const AppBar = () => {
    return (
        <AppBarContainer>
            <AppBarLogo>THE TIME</AppBarLogo>
            <AppBarLinks>
                <AppBarLink>Home</AppBarLink>
                <AppBarLink>Products</AppBarLink>
                <AppBarLink>Article</AppBarLink>
                <AppBarLink>About Us</AppBarLink>
                <AppBarLink primary>Sign In</AppBarLink>
            </AppBarLinks>
        </AppBarContainer>
    );
};

export default AppBar;
