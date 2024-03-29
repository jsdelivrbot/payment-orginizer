import React, { Component } from 'react';
import { fetchGardenData } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/ag-grid.js';

class GardenPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridOptions: {
        api: {},
        columnApi: {},
        columnDefs: [
          // {headerName: 'Athlete', field: 'athlete', checkboxSelection: true, editable: true},
          {headerName: 'Month', field: 'month', width: 90}
        ],
        rowData: [
          {
            athlete: 'Rob',
            age: '33'
          }
        ],
        enableSorting: true,
        onGridReady: this.onGridReady.bind(this)
      }

    };
  }

  onGridReady(params) {
    this.state.gridOptions.api = params.api;
    this.state.gridOptions.columnApi = params.columnApi;
    this.state.gridOptions.api.selectAll();
    this.setState(this.state);
  }


  componentWillMount () {
    console.log("calling fetchGardenData");
    this.props.fetchGardenData();
  }

  render () {

    return (
      <div>
        Group with a plus sign?
        <button onClick={() => this.state.gridOptions.api.deselectAll()}> Clear </button>
        <div className="ag-fresh" id="myGrid" style={{"width": "1100px", "height": "300px"}}>
          <AgGridReact

              // column definitions and row data are immutable, the grid
              // will update when these lists change
              columnDefs={this.state.gridOptions.columnDefs}
              rowData={this.props.garden.garden}
              gridOptions={this.state.gridOptions}

              // or provide props the old way with no binding
              rowSelection="multiple"
              enableSorting="true"
              enableFilter="true"
              rowHeight="22"
          />
        </div>

      </div>
    );

  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGardenData }, dispatch);
}

function mapStateToProps({garden}) {
  console.log("Garden Page got", {garden});
  return {garden};
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenPage)
