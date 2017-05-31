import React, { Component } from 'react';
import { fetchPaymentsData } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/ag-grid.js';

class PaymentsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridOptions: {
        api: {},
        columnApi: {},
        columnDefs: [
          {headerName: 'Title', field: 'title'},
          {headerName: 'Start Date', field: 'startDate'},
          {headerName: 'Expires', field: 'expires'},
          {headerName: 'Paid By', field: 'paidBy'},
          {headerName: 'Total', field: 'total'},
          {headerName: 'Payments', field: 'monthlyPayments'}
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
    console.log(`Payments Page: calling fetchPaymentsData`);
    this.props.fetchPaymentsData();
  }

  render () {

console.log(this.props.payments);
    return (
      <div>
        Payments Data
        <div className="ag-fresh" id="myGrid" style={{"width": "1100px", "height": "300px"}}>
          <AgGridReact

              // column definitions and row data are immutable, the grid
              // will update when these lists change
              columnDefs={this.state.gridOptions.columnDefs}
              rowData={this.props.payments.payments}
              //rowData={this.state.gridOptions.rowData}
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
  return bindActionCreators({ fetchPaymentsData }, dispatch);
}

function mapStateToProps({payments}) {
  return {payments};
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsPage)
