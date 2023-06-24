import "./App.css";
import { CakeView } from "./redux/features/cake/CakeView.jsx";
import { IceCreamView } from "./redux/features/icecream/IceCreamView";
import { UserView } from "./redux/features/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
