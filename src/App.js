import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
