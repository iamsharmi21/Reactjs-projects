import logo from './logo.svg';
import './App.css';
import CustomerAdd from './customerAdd';
import { Provider } from 'react-redux';
import CustomerView from './customerView';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>

  );
}

export default App;
