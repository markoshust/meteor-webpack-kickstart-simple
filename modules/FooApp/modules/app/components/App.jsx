import { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  componentWillMount() {
    require('../client/styles/App.import.css');
  }

  render() {
    return (
      <div className="foo-app">
        {this.props.children}
      </div>
    );
  }
}

