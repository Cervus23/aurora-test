import Header from './containers/Header';
import Auth from './containers/Auth';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="main-title">Hello! Welcome to Aurora</h1>
      <Auth />
    </div>
  );
}

export default App;
