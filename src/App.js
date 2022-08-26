import { Articles, Footer, Home, Navbar, Offers } from "./components/layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Offers />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
