import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './../util';
import reduce from './../reducers';
import * as actions from './../actions';

import command from './../utils/command';
import Item from './Item';

@connect(reduce, bindActions(actions))
export default class Feed extends Component {
  
  shouldComponentUpdate({ images }) {
    return images !== this.props.images;
  }

  selectImage = (image) => {
    this.props.setSelected(image);
  }

  render({ images }) {
    return (
      <div id="feed">
        {(images.length < 1) ? (
          <main>
            <div className="container">
              <p>This application uses the <a href="https://www.w3.org/TR/service-workers/">Service Worker API</a> which allows the user control over the cache.</p>
              <p>This application shows how <a href="https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage">postMessage()</a> can be used to let the client communicate with the Service Worker to load assets, place them in the cache and display them instantly afterwards.</p>
              <p>After loading an external asset it's available offline and can also be removed from the cache.</p>
              {('serviceWorker' in navigator) ? (<p />) : (
                <p>Sadly your browser does not support this functionality yet. The application will work but not offline. Support for this feature can be found on <a href="https://jakearchibald.github.io/isserviceworkerready/">isserviceworkerready</a>.</p>
              )}
            </div>
          </main>
        ) : images.map(image => (
          <Item key={image.id} image={image} onSelect={this.selectImage} />
        ))}
      </div>
    );
  }
}
