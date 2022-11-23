// import logo from './logo.svg';
import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <h1>this is heading</h1> */}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
