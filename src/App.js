import "./App.css";
import CardOne from "./components/CardOne/CardOne";
import CardTwo from "./components/CardTwo/CardTwo";
import CardThree from "./components/CardThree/CardThree";
import CardFour from "./components/CardFour/CardFour";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-12 d-flex justify-content-center">
            <div className="row">
              <div className="col-12 align-self-center text-center">
                <h2 id="first-header">Reliable, efficient delivery</h2>
                <h2 id="second-header">Powered by Technology</h2>
                <p className="other-text">
                  Our Artificial Intelligence powered tools use millions of
                  project data <br /> points to ensure that your project is
                  successful
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-12 col-lg-4 align-self-center mb-3">
                <CardOne />
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="row d-flex flex-column">
                  <div className="col-6 mb-3">
                    <CardTwo />
                  </div>
                  <div className="col-6 mb-3">
                    <CardThree />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 align-self-center mb-3">
                <CardFour />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
