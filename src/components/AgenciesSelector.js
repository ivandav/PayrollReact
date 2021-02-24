import React, {Component} from 'react';
import AgencyButton from './AgencyButton';
import { FaRegCaretSquareDown } from 'react-icons/fa';

class AgenciesSelector extends Component {
    constructor() {
        super();
        this.state = {
            agencieName: 'Please Select an Agency'
        };
        this.updateSelection = this.updateSelection.bind(this);
    };

    updateSelection(name) {
        this.setState({agencieName: name})
    }

    render () {
        return (
            <div className={
                'card textcenter mt-3 ' + (this.props.formDisplay ? '': 'add-appointment')
            }>
                <div className="apt-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}>
                        <FaRegCaretSquareDown />
                        Agencies List{" - " + this.state.agencieName}
                    </div>
                    <div className="card-body">
                    <form id="aptForm" noValidate>
                        <div>
                            {this.props.agencies2.map(item => (
                            <div className="btn btn-primary"
                                onClick={e => {
                                    this.props.selectAgc(item.code);
                                    this.updateSelection(item.agcName);}}>
                                { item.code + "\b\t\| " + item.agcName}
                            </div>
                            ))}
                        </div> 
                    </form>
                    </div>
                
            </div>
        );
    }
}

export default AgenciesSelector;
