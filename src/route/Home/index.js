import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        主内容页面
      </div>
    )
  }
}

const mapStateToProps = (appState, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps)(Home);