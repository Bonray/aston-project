import React from "react";
import PropTypes from 'prop-types';
import ErrorMessage from "./UI/ErrorMessage/ErrorMessage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(err) {
    console.error(err);
    this.setState({
      hasError: true,
    })
  }

  render() {
    return this.state.hasError
      ? <ErrorMessage>Oops... Something went wrong. Please, refresh the page or come back later.</ErrorMessage>
      : this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;