import React from "react";
import style from "./slideStyle.module.css"

const Slide = React.memo(props => {
    const {slidePositionX, clas} = props
    const transformStyle = {transform : `translateX(${slidePositionX}%)`}
  return (
     <div style={transformStyle} className={`${style.slide} ${style[clas]}`}>
     </div>
  );
})

export default Slide;
