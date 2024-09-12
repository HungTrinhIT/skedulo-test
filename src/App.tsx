import { Provider } from 'react-redux';

import { rootStore as store } from './redux/store';
import Homepage from './pages/Homepage/Homepage';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Homepage />
    </Provider>
  );
}

export default App;
