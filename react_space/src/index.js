import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import 'antd/dist/antd.css';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
