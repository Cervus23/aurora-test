import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import Header from './containers/Header';
// import Auth from './containers/Auth';
import Footer from './containers/Footer';
import './App.scss';

const store = createStore(reducers);

function App() {
  const width = window.innerWidth;
  return (
    <Provider store={store}>
      <div className="App">
        <div className="with-image">
          <Header width={width} />
          {width > 360 ? (
            <h1 className="main-title">Hello! Welcome to Aurora</h1>
          ) : null}
        </div>

        <Footer width={width} />
        {/* <Auth /> */}
      </div>
    </Provider>
  );
}

export default App;