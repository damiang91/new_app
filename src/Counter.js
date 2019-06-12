import React, {Component} from 'react';
import './Counter.css';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {
    constructor(props) {
    super(props);
    let initValue = 0;
    if ( ! isNaN(this.props.initValue) ) {
    initValue = parseInt(this.props.initValue);
    }
    this.state = {
    counterValue: initValue,
    }
    }

    changeValue = () => {        
       if(this._inputStep.value === 1) {    
    this.setState( (prevValue,) => {
        

    return({
    counterValue: (prevValue.counterValue + 1),
    });

    });}
    this.setState( (prevValue,) => {
        

        return({
        counterValue: (prevValue.counterValue + parseInt(this._inputStep.value)),
        });
    
        });
    
}





resetCounter = (resetCounter) => {
    let initValue = 0;
    if (!resetCounter) {
    if ( ! isNaN(this.props.initValue) ) {
    initValue = parseInt(this.props.initValue);
    }
    }
    this.setState({
    counterValue: initValue,
    })
    }
    render() {
    return(
    <div className="counter">
    Licznik:
    <span className="value">
    {this.state.counterValue}
    </span>
    <ButtonsPanel  changeCounterValue={this.changeValue} resetCounterValue={this.resetCounter} />
    Kroki: <input ref={(data) => { this._inputStep = data} }   type="number" min="1" />

    </div>
    );
    }
    }
    export default Counter;
    