import About from "./components/About";
import AboutChroni from "./components/AboutChroniFI";
import Footer from "./components/Footer";
import FooterSignUp from "./components/FooterSignUp";
import Header from "./components/header";
import Quiz from "./components/Quiz";
import SignUP from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUP />
      <About />
      <Quiz />
      <AboutChroni />
      <FooterSignUp />
      <Footer/>
      </div>
    
  );
}

export default App;
