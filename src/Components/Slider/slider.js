import React from 'react';
import style from "./sliderStyle.module.css"
import SliderPagination from "./SliderPagination/sliderPagination";
import Slide from "./Slide/Slide";

class Slider extends React.PureComponent {
    state = {
        activeCircle : 0,
        autoSwitchPause : false,
        slidePositionX : 0
    }

    componentDidMount() {
        this.autoSwitchSlide()
    }

    //----------------AUTO-SWITCHING-SLIDE--------------//
    i = -1;
    autoSwitchSlide = () => {
        const pause = this.state.autoSwitchPause
        if(this.i < 2 && !pause) this.i++
        else if(pause) {}
        else this.i = 0
        this.switchSlide(false, this.i)

        setTimeout(this.autoSwitchSlide, 3000)
    }
    //----------------SWITCHING-SLIDE-------------------//
    checkPositionX = (id) => {
        if(id === 0) return 0
        if(id === 1) return -100
        if(id === 2) return -200
    }
    changeActiveCircle = (circleElementId) => {
        this.setState( ({activeCircle}) => {
            return {activeCircle :  circleElementId}
        })
    }
    changeSlidePositionX = (circleElementId) => {
        const newSlidePositionX = this.checkPositionX(circleElementId)
        this.setState( ({slidePositionX}) => {
            return {slidePositionX : newSlidePositionX}
        })
    }
    switchSlide = (event, id) => {
        const circleElementId = event? Number(event.target.id) : id
        this.changeActiveCircle(circleElementId)
        this.changeSlidePositionX(circleElementId)
    }
    //---------------PAUSE-SWITCHING-SLIDE---------------//
    onMouseLeaveOrOverHandler = (trueOrFalse) => {
        this.setState(({autoSwitchPause}) => {
            return {autoSwitchPause : trueOrFalse}
        })
    }
    setPaginationPause = (event) => {
        const trueOrFalse = event.type === "mouseover" ? true : false
        this.onMouseLeaveOrOverHandler(trueOrFalse)
    }

    render() {
        const { activeCircle, slidePositionX} = this.state
        const slidePageArray = ["SlideOne", "SlideTwo", "SlideThree"]
        return (
            <div onMouseOver={this.setPaginationPause} onMouseLeave={this.setPaginationPause} className={`${style.wrapper}`}>
                {slidePageArray.map(el => <Slide clas={el} key={el} slidePositionX={slidePositionX}/>)}
                <SliderPagination activeCircle={activeCircle} switchSlide={this.switchSlide}/>
            </div>
        );
    }
}

export default Slider;
