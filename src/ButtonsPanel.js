import React, {Component} from 'react';
import './ButtonsPanel.css';
class ButtonsPanel extends Component {


  
    render(){
        return(
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Add 1</button>
                <button onClick={ () => this.props.resetCounterValue(false) }>ReInit</button>
                <button onClick={ () => this.props.resetCounterValue(true) }>Reset</button>
                


            </div>
        )
    }
}
export default ButtonsPanel;