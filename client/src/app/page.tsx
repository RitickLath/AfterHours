import Feature from "./component/Feature";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Stats from "./component/Stats";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Feature />
    </div>
  );
};

export default Home;
