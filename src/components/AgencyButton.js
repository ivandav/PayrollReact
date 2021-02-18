import React, {Component} from 'react';

class AgencyButton extends Component {
    constructor() {
        super();
    };
    render () {
        return (
          <div>
                {this.props.agencies.map(item => (
                  <div className="btn btn-primary">
                    {item.code + '\t\| '}
                    {item.agcName}
                  </div>
                ))}
          </div>
                
        );
    }

}

export default AgencyButton;