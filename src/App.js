import Content from "./componets/Content";
import Parallax from "./componets/Parallax";
import Banner from "./componets/Banner";
import AppBar from "./componets/AppBar";

const App = () => {
    return (
        <>
            <AppBar />
            <Parallax />
            <Banner />
            <Content />
        </>
    );
};

export default App;
