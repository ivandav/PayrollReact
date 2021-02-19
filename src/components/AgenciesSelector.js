import React, {Component} from 'react';
import AgencyButton from './AgencyButton';
import { FaRegCaretSquareDown } from 'react-icons/fa';

class AgenciesSelector extends Component {
    constructor() {
        super();
        this.state = {
            agenciesList: ['covenant','advantage','ecvx enterprises']
        };
    }

    render () {
        return (
            <div className={
                'card textcenter mt-3 ' + (this.props.formDisplay ? '': 'add-appointment')
            }>
                <div className="apt-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}>
                        <FaRegCaretSquareDown />
                        Agencies List
                    </div>
                    <div className="card-body">
                    <form id="aptForm" noValidate>
                        <AgencyButton 
                            agencies={this.props.agencies2}
                            selectedAgc={this.props.selectAgc}/>
                    </form>
                    </div>
                
            </div>
        );
    }
}

export default AgenciesSelector;
