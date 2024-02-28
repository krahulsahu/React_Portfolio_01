
import Navbar from "./comp/Navbar/Navbar";
import About from "./comp/About/About";
import Skill from "./comp/Skill/Skill";
import Works from "./comp/Works/Works";
import  Contact from "./comp/Contact/Contact";
import Footer from "./comp/footer/Footer";
// import ContactUs from "./comp/Email/Email";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
