import React, { Component } from 'react'

import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default class BoxList extends Component {
    constructor(props){
        super(props);
        this.state={ boxes:[]}
        this.addBox=this.addBox.bind(this);
    }
    remove(id){
        this.setState({boxes:this.state.boxes.filter(box => box.id !==id)});
    }
    addBox(item){
        this.setState({boxes: [...this.state.boxes, item]})
    }
    render() {
        return (
            <div >
                <h1>Box Maker Thingy</h1>
                <NewBoxForm add={this.addBox}/>
                {this.state.boxes.map(box=>(<Box key={box.id} id={box.id} width={box.width} height={box.height} background={box.background} remove={()=> this.remove(box.id)}/>))}
            </div>
        )
    }
}
