import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

import Toolbar from './Toolbar';
import Feed from './Feed';
import Modal from './Modal';
import Button from './Button';
import Preview from './Preview';
import Toast from './Toast';

@connect(reduce, bindActions(actions))
export default class App extends Component {

  componentDidMount() {
    window.addEventListener('online', this.notifyNetworkStatus);
    window.addEventListener('offline', this.notifyNetworkStatus);
    navigator.serviceWorker.addEventListener('message', this.notifyServiceWorkerStatus);
  }

  notifyNetworkStatus = () => {
    this.props.setNetwork(navigator.onLine);
  }

  notifyServiceWorkerStatus = (event) => {
    this.props.setToast(event.data);
  }

  render() {
    return (
      <div id="app">
        <Toolbar />
        <Feed />
        <Modal />
        <Button />
        <Preview />
        <Toast />
      </div>
    );
  }
}
