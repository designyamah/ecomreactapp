import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Feautred from "../components/Feautred";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Feautred />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
