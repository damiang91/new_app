import React, {Component} from 'react';

class Set extends Component {

    


    
    render(){
        return(
            <div>
                Kroki: <input ref={(data) => { this._inputStep = data} }  onChange={this.props.stepValue} type="number" min="1" /> 
                


            </div>
        )
    }
}
export default Set;