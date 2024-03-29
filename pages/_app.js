import '../styles/globals.scss'
import {Provider} from "react-redux";
import store from "../store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return<Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <Component {...pageProps} />
    </PersistGate>
  </Provider>
  
}

export default MyApp
