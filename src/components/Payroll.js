import '../css/App.css';
import AddAppointments from './AddAppointments';
import AgenciesSelector from './AgenciesSelector';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import NavBar from './NavBar/NavBar';
import { Component } from 'react';
import { without } from 'lodash';
import { each } from 'jquery';

class Payroll extends Component{

  constructor() {
    super();
    this.state = {
      myAppointments: [],
      myAgencies: [],
      formDisplay: false,
      orderBy: 'empName',
      orderDir: 'asc',
      queryText: '',
      codeText: '50',
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchApts = this.searchApts.bind(this);
    this.filterByList = this.filterByList.bind(this);
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  addAppointment(apt) {
    let tempApts = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    tempApts.unshift(apt);
    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteAppointment(apt) {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);

    this.setState({
      myAppointments: tempApts
    });
  }

  searchApts(query) {
    this.setState({queryText: query});
  }

  filterByList(code) {
    this.setState({codeText: code});
  }

  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  componentDidMount() {
    fetch('./payroll.json')
    .then(response => response.json())
    .then(result => {
      const appointments = result.employees.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex + 1 })
        return item;
      })
      const agencies = result.agencies
      this.setState({
        myAgencies: agencies,
        myAppointments: appointments
      });
    });
  }

render () {

  let order;
  let filteredApts = this.state.myAppointments.filter(eachItem => {
    return(
      eachItem['code']
        .toLowerCase()
        .includes(this.state.codeText.toLowerCase())
    );
  });
  if(this.state.orderDir === 'asc'){
    order = 1;
  } else {
    order = -1;
  }

  filteredApts = filteredApts.sort((a,b) => {
    if(a[this.state.orderBy].toLowerCase() <
      b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
  }).filter(eachItem => {
    return(
      eachItem['empName']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) 
    );
  });

  return (
    <div className="">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            {/* <AddAppointments 
              formDisplay={this.state.formDisplay}
              toggleForm={this.toggleForm}
              addAppointment = {this.addAppointment}
            /> */}
            
            <AgenciesSelector
              formDisplay={this.state.formDisplay}
              toggleForm={this.toggleForm}
              agencies2={this.state.myAgencies}
              selectAgc={this.filterByList}
            />
            <SearchAppointments 
              orderBy = {this.state.orderBy}
              orderDir = {this.state.orderDir}
              changeOrder={this.changeOrder}
              searchApts={this.searchApts}
            />
            <ListAppointments appointments={filteredApts}
              deleteAppointment={this.deleteAppointment}
              agcInfo={this.state.myAgencies}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default Payroll;
