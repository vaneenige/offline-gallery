import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

import command from './../utils/command';

@connect(reduce, bindActions(actions))
export default class Modal extends Component {

  shouldComponentUpdate({ modal, network }) {
    return modal !== this.props.modal || network !== this.props.network;
  }

  getImage = (e) => {
    e.preventDefault();
    this.toggleModal();
    if ('serviceWorker' in navigator) {
      command({ command: 'add', url: this.input.value }).then((response) => {
        this.props.addImage(response.data.url);
      });
    } else {
      this.props.addImage(this.input.value);
    }
  }

  getRandomImage = (e) => {
    e.preventDefault();
    this.toggleModal();
    for (let i = 0; i < 1; i += 1) {
      const url = `https://unsplash.it/${400 + (400 * Math.random())}/${400 + (400 * Math.random())}`;
      if ('serviceWorker' in navigator) {
        command({ command: 'add', url }).then((response) => {
          this.props.addImage(response.data.url);
        });
      } else {
        this.props.addImage(url);
      }
    }
  }

  toggleModal = () => {
    this.props.setModal(!this.props.modal);
  };

  render({ modal, network }) {
    return (
      <div id="modal">
        <div id="background" className={modal && network ? 'visible' : ''} onClick={this.toggleModal} />
        <div id="overlay" className={modal && network ? 'opened' : ''}>
          <div className="layout-horizontal">
            <div className="label">Save for offline</div>
          </div>
          <form action="" className="layout-vertical">
            <input type="text" name="url" placeholder="Url" ref={(input) => { this.input = input; }} />
            <div className="layout-horizontal">
              <input type="submit" className="modal-button" onClick={this.getImage} value="Save" />
              <input type="submit" className="modal-button" onClick={this.getRandomImage} value="Random" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
