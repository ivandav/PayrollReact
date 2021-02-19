import React, {Component} from 'react';

class AgencyButton extends Component {
    constructor() {
        super();
    };
    render () {
        return (
          <div>
            {this.props.agencies.map(item => (
              <div className="btn btn-primary"
              onClick={e => (this.props.selectedAgc(item.code))}>
              {item.code + "\b\t\| " + item.agcName}
            </div>
            ))}
          </div>     
        );
    }

}

export default AgencyButton;