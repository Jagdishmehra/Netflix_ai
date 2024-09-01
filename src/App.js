import { Provider } from "react-redux";
import Body from "./components/Body";
import appstore from "./utilities/appstore";


function App() {
  return (
    <Provider store={appstore}><Body/></Provider>
  );
};

export default App;
