import React from 'react';
import style from "./buttonStyle.module.css";

const Button = React.memo(props => {
    const {id, active, text} = props

    const classes = [style.wrapper, style[id]]
    if (active) classes.push(style.active)

    return (
        <div className={classes.join(" ")}>
            {text}
        </div>
    );
})

export default Button;
