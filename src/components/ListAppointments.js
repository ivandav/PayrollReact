import React, {Component} from 'react';
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import Moment from 'react-moment'

class ListAppointments extends Component {
    render() {
        const listItems = this.props.appointments.map(item => (
            <div>{item.empName}</div>
        ));
        return (
            <div className="appointment-list item-list mb-3">
            {this.props.appointments.map(item => (
                <div className="pet-item col media py-3" key={item.aptId}>
                <div className="mr-3">
                  <button className="pet-delete btn btn-sm btn-danger"
                    onClick={()=>this.props.deleteAppointment(item)}
                  >
                      <FaCanadianMapleLeaf />
                      
                  </button>
                </div>
    
                <div className="pet-info media-body d-flex justify-content-around">
                  <div className="pet-head">
                    <span className="pet-name">{item.empName}</span>
                    <div className="owner-name">
                      <span className="label-item">Agency: </span>
                      <span>Fiallo Holdings</span>
                    </div>
                    <div className="apt-notes">Cannot be picked up by anyone</div>
                  </div>
                  <div>
                    <span className="apt-date ml-auto">
                        {/* <Moment 
                            date={item.aptDate}
                            parse="YYYY-MM-dd hh:mm"
                            format="MMM-D h:mma"
                        /> */
                        "$" + item.empSalary.toFixed(2)
                        }
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        );
    }
}

export default ListAppointments;