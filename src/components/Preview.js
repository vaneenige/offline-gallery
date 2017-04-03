import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

import command from './../utils/command';

@connect(reduce, bindActions(actions))
export default class Preview extends Component {
  
  shouldComponentUpdate({ selected }) {
    return selected !== this.props.selected;
  }

  render({ selected }) {
    const src = selected === null ? '' : selected.image;
    const visible = selected === null ? '' : 'visible';
    return (
      <div id="preview" className={visible}>
        <img src={src} alt="" />
      </div>
    );
  }
}
