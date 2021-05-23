import { GlobalStyle } from "./style";
import {Provider} from 'react-redux';
import Header from './common/header/index';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle>
      </GlobalStyle>
      <Header />
    </Provider>
  );
}

export default App;
