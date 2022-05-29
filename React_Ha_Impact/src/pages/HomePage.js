import React, { Component } from 'react';
import ItemContainer from '../containers/index'
// import ItemComponent from '../components/index'


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <ItemContainer />
        {/* <ItemComponent /> */}
        {/* Call container here */}
      </div>
    );
  }
}

export default HomePage;
