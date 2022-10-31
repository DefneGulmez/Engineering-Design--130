import React, { Component } from 'react';
import { Right } from 'react-bootstrap/lib/Media';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './NP.css'



class Counter extends Component {
    
    state = {
        count_begin: 0,
        count_end: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        popup_state: false,
        value: '',
        pot:''
    };

    constructor() {
        super();
        this.handleIncrementBegin= this.handleIncrementBegin.bind(this);
        this.handleDecrementBegin = this.handleDecrementBegin.bind(this);
        this.handleIncrementEnd= this.handleIncrementEnd.bind(this);
        this.handleDecrementEnd = this.handleDecrementEnd.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePopupOption_1 = this.handlePopupOption_1.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSaveButton= this.handleSaveButton.bind(this);
        this.handlePot1= this.handlePot1.bind(this);
        this.handlePot2= this.handlePot2.bind(this);
    }

    handleSaveButton() {
        window.open(`https://mooon.pythonanywhere.com/json/program/${this.state.pot}/${this.state.value}` , '_blank', 'noopener,noreferrer');
       

    }

    handlePot1(){
        this.setState({pot: '100'})
        window.open(`https://mooon.pythonanywhere.com/json/new/${this.state.value}/${this.state.count_begin}/${this.state.count_end}` , '_blank', 'noopener,noreferrer');
        console.log(this.state.pot);
    }
    handlePot2(){
        this.setState({pot: '200'})
        window.open(`https://mooon.pythonanywhere.com/json/new/${this.state.value}/${this.state.count_begin}/${this.state.count_end}` , '_blank', 'noopener,noreferrer');
        console.log(this.state.pot);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleIncrementBegin(){
        this.setState( {count_begin: this.state.count_begin + 10});
        console.log(this.state.count_begin);
    }

    handleDecrementBegin(){
        this.setState( {count_begin: this.state.count_begin - 10});
        console.log(this.state.count_begin);
    }
    

    handleIncrementEnd(){
        this.setState( {count_end: this.state.count_end + 10});
        console.log(this.state.count_end);
    }
    

    handleDecrementEnd(){
        this.setState( {count_end: this.state.count_end - 10});
        console.log(this.state.count_end);
    
    }

    handleReset(){
        this.setState( {count_begin: this.state.count_begin = 0});
        this.setState( {count_end: this.state.count_end = 0});
    }

    handlePopupOption_1(){
        this.setState( {count_begin: this.state.count_begin = 30});
        this.setState( {count_end: this.state.count_end = 50});
    }


    styles = {
        fontSize: 20,
        fountWeight: 'bold',
        borderRadius: 100,
        margin: 20
    };

    styles2 ={
        margin: 20
    }

    space = {
        width: 20, 
        height: 10,
    }


    render() {  

        return (


            <div className='div'>
                <div className='div-inner'>
                <h1 className ='app-into'>Eco Flower: New Plant</h1>
                <p className = 'app-into'>Plant Name</p>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p className = 'app-into'>Start Humidity</p>
                <span style={this.styles} className= {this.getBadgeClassesBegin()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrementBegin} className='btn btn-success btn-sm'>increment</button>
                <button onClick={this.handleDecrementBegin} className='btn btn-danger btn-sm'>decrement</button>
                <p className = 'app-into'>Stop Humidity</p>
                <span style={this.styles} className= {this.getBadgeClassesEnd()}>{this.formatCountSecond()}</span>
                <button onClick={this.handleIncrementEnd} className='btn btn-success btn-sm'>increment</button>
                <button onClick={this.handleDecrementEnd} className='btn btn-danger btn-sm'>decrement</button>

                <p className = 'app-into'> </p>

                <p className = 'app-into'>Pot position</p>
                <button onClick={this.handlePot1} outline rounded className='btn btn-secondary btn-sm'>left pot</button>
                <button onClick={this.handlePot2} outline rounded className='btn btn-secondary btn-sm'>right pot</button>

                <p className = 'app-into'> </p>


                <Popup trigger={<button className='btn btn-secondary btn-sm'>Fill automatically</button>} 
                 position="right center">
                    <img width={250} height={250}src={require('./monstera.jpg')} alt="React Logo" />
                    <button onClick={this.handlePopupOption_1} className='btn btn-secondary btn-sm'>Monstera</button>
                    <img width={250} height={250}src={require('./Jade.jpg')} alt="React Logo" />
                    <button onClick={this.handlePopupOption_1} className='btn btn-secondary btn-sm'>Jade-plant</button>
                </Popup>
                
                <p className = ''> </p>
                <button onClick={this.handleSaveButton} className='btn btn-secondary btn-sm'>Save</button>
                <p style={this.space} />
                <button onClick={this.handleReset} className='btn btn-secondary btn-sm'>Reset</button>
                </div>
    
            </div>
            );
    }
    getBadgeClassesBegin() {
        let classes = 'btn btn-sm btn-';
        classes += (this.state.count_begin === 0) ? 'dark' : 'light';
        return classes;
    }

    getBadgeClassesEnd() {
        let classes = 'btn btn-sm btn-';
        classes += (this.state.count_end === 0) ? 'dark' : 'light';
        return classes;
    }

    formatCount() {
        const {count_begin} = this.state;
        return count_begin === 0 ? 'zero' : count_begin;
    }

    formatCountSecond() {
        const {count_end} = this.state;
        return count_end === 0 ? 'zero' : count_end;
    }
}
 
export default Counter;
