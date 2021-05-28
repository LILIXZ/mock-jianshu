import { GlobalStyle } from "./style";
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index';
import store from './store';
import Home from './pages/home/index';
import Detail from './pages/detail/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle>
      </GlobalStyle>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={ Home } />
        <Route path='/detail' exact component = { Detail } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
