import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

@connect(reduce, bindActions(actions))
export default class Toast extends Component {
  
  shouldComponentUpdate({ toast }) {
    return toast !== this.props.toast;
  }

  render({ toast }) {
    this.lastMessage = (toast.message !== '') ? toast.message : this.lastMessage;

    return (
      <div id="toast" className={toast !== '' ? 'opened' : ''}>
        {(toast !== '') ? toast : this.lastToast}
      </div>
    );
  }
}
