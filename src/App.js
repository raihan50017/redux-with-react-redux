import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Test from "./components/Test";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Learning</h1>
        <Test></Test>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
