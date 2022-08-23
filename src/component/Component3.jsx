import React, { Component } from 'react';
import { CarouselData } from "./CarouselData";
import Slider from './Slider';
class Component3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
          };
          
    }
    nextSlide = () => {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      };
    
     prevSlide = () => {
        let newSlide =
          this.state.currentSlide === 0
            ? CarouselData.length - 1
            : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
        
      };
  
    
    componentDidMount() {
        const intervalId = setInterval(() => {
          this.setState(prevState => {
            
            this.nextSlide();
        
          });
        }, 5000);
      }
    render() { 
        return ( 
        <div className="rowbox">
        <div className="rowbox crousal">
            <div className='absolute'><button onClick={this.prevSlide}><i class="fa fa-angle-left" aria-hidden="true"></i></button><button onClick={this.nextSlide}><i class="fa fa-angle-right" aria-hidden="true"></i></button></div>
      {/* <Slider index={this.state.currentSlide} /> */}
      <div className='crbox'>
       <img src={`banner${this.state.currentSlide}.webp`}  alt="This is a carousel slide" />
       </div>
        </div>
    </div> );
    }
}

 
export default Component3;