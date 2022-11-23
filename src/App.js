import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import About from "./pages/about";
import Banner from "./pages/banner";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  );
}

export default App;
