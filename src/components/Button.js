import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

@connect(reduce, bindActions(actions))
export default class Button extends Component {

  shouldComponentUpdate({ modal, network }) {
    return modal !== this.props.modal || network !== this.props.network;
  }

  toggleModal = () => {
    this.props.setModal(!this.props.modal);
  };

  render({ modal, network }) {
    const style = {
      transform: modal || !network ? 'scale3d(0, 0, 0)' : 'scale3d(1, 1, 1)',
    };
    return (
      <button id="add" style={style} onClick={this.toggleModal}>
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    );
  }
}
