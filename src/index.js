import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import store from './store';
import reducers from './reducers';

import App from './components/App';

window.store = store;

render((
  <div id="root">
    <Provider store={store}>
      <App />
    </Provider>
  </div>
), document.body);
