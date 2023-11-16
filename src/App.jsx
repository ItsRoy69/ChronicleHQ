import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Images from "./components/Images";
import CardSlider from "./components/CardSlider";
import MobileScreen from "./components/MobileScreen";

function App() {
  return (
    <>
      <div className="body">
        <Navbar />
        <Banner />
        <Images />
        <Text />
        <CardSlider />
        <MobileScreen />
      </div>
    </>
  );
}

export default App;
