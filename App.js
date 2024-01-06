import { ModalPortal } from 'react-native-modals';
import Navigation from "./navigation";
import store from './redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <ModalPortal />
    </Provider>
  );
}