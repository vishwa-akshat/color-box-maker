import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state={height:'', width:'', background:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleAddItem=this.handleAddItem.bind(this);
    }
    handleAddItem(e){
        e.preventDefault();
        this.props.add({...this.state,id: uuidv4()});
        this.setState({height:'', width:'', background:''});
    }
    handleChange(e){
        this.setState({ [e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <label htmlFor="height">Height</label>
                    <input id="height" name="height" value={this.state.height} placeholder="Height" onChange={this.handleChange}/>
                    <label htmlFor="width">Width</label>
                    <input id="width" name="width" value={this.state.width} placeholder="Width" onChange={this.handleChange}/>
                    <label htmlFor="background">Background Color</label>
                    <input id="background" name="background" value={this.state.background} placeholder="Background" onChange={this.handleChange}/>
                    <button>Add a new box!</button>
                </form>
            </div>
        )
    }
}
