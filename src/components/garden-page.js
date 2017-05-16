import React, { Component } from 'react';
import { fetchGardenData } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GardenPage extends Component {

  componentWillMount () {
    console.log("calling fetchGardenData");
    this.props.fetchGardenData();
  }

  render () {

    return (
      <div>
        Garden Page here
        {this.props.garden.gardenData}
      </div>
    );

  }

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGardenData }, dispatch);
}

function mapStateToProps({garden}) {
  console.log("Garden Page got", garden);
  return {garden};
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenPage)
