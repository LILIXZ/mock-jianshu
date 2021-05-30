import { GlobalStyle } from "./style";
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index';
import store from './store';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Login from './pages/login/index';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle>
      </GlobalStyle>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={ Home } />
        <Route path='/detail/:id' exact component = { Detail } />
        <Route path='/login' exact component = { Login }/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
