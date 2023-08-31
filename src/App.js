import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Product />
      <Contact />
    </div>
    </>
  );
}

export default App;
