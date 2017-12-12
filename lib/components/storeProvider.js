import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
    }
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    state = {};

    onStoreChange = () => {
      if (this.subscriptionId) this.setState(this.usedState());
    };
    usedState = () => {
      return extraProps(this.context.store, this.props);
    };

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.usedState()}
          store={this.context.store}
        />
      );
    }
  };
};

export default storeProvider;
