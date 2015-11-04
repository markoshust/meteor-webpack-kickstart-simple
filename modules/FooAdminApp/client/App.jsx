import { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    return (
      <div className="foo-admin-app">
        {this.props.children}
      </div>
    );
  }
}

