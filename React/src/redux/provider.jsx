import { Provider } from "react-redux";
import { store } from "./store.js";

// eslint-disable-next-line react/prop-types
export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
