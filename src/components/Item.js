import { h, Component } from 'preact';

export default class Item extends Component {

  shouldComponentUpdate({ image, onSelect }) {
    return image !== this.props.image || onSelect !== this.props.onSelect;
  }

  select = () => {
    const { onSelect, image } = this.props;
    onSelect(image);
  };

  render({ image }) {
    const style = {
      backgroundImage: `url(${image.image})`,
    };

    return (
      <div style={style} onClick={this.select} alt="" />
    );
  }
}
