import React from "react";
import style from "./sliderPaginationStyle.module.css"

const SliderPagination = React.memo(props => {
    const active = {color : "pink"}
    const {switchSlide, activeCircle} = props
    const circlesArray = [0, 1, 2]
    return (
        <div className={`${style.wrapper}`}>
            {circlesArray.map(el => {
                return <span><i style={activeCircle === el? active : null}
                                onClick={switchSlide}
                                key={el} id={el}
                                className="fa fa-circle"/></span>
            })}
        </div>
    )
})

export default SliderPagination;
