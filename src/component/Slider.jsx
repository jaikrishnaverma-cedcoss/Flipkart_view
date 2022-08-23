import React, { Component } from 'react';
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: this.props.index
            
        }
        
    }

    render() { 
        return ( <>
         <div className='crbox'>
       <img src={`banner${this.state.index}.webp`}  alt="This is a carousel slide" />
       </div></> );
    }
}
 
export default Slider;