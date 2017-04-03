import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

import command from './../utils/command';

@connect(reduce, bindActions(actions))
export default class Toolbar extends Component {

  shouldComponentUpdate({ selected, images }) {
    return selected !== this.props.selected || images !== this.props.images;
  }

  remove = () => {
    if ('serviceWorker' in navigator) {
      command({
        command: 'delete',
        url: this.props.selected.image,
      }).then((response) => {
        this.props.removeImage(this.props.selected);
        this.props.setSelected(null);
      });
    } else {
      this.props.removeImage(this.props.selected);
      this.props.setSelected(null);
    }
  };

  hide = () => {
    this.props.setSelected(null);
  };

  render({ selected, images }) {
    const toolbarColor = selected === null ? '#EF6C00' : '#212121';
    const style = { background: toolbarColor };
    document.querySelector('[name=theme-color]').setAttribute('content', toolbarColor);
    const iconStyle = { display: selected === null ? 'none' : 'block' };
    return (
      <div id="toolbar" style={style}>
        <span>{('serviceWorker' in navigator) ? 'Offline' : ''} Gallery ({images.length})</span>
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" onClick={this.hide} style={iconStyle}>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" onClick={this.remove} style={iconStyle}>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    );
  }
}
