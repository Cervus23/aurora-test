import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import Header from './containers/Header';
import Auth from './containers/Auth';
import Footer from './containers/Footer';
import './App.scss';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <h1 className="main-title">Hello! Welcome to Aurora</h1>
        <Footer />
        {/* <Auth /> */}
      </div>
    </Provider>
  );
}

export default App;
