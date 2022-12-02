import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
