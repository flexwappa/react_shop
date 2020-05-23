import React from 'react';
import style from "./headerMenuTwoStyle.module.css";

const HeaderMenuTwo = React.memo(props => {
    const {gender, showHeaderMenuThree, unshowHeaderMenuThree} = props
    const menuTextArray = ["Одежда", "Обвуь", "Аксессуары"]
    return (
        <div className={`${style.wrapper} ${style[gender]}`}>
            {menuTextArray.map(el => <div key={el} onMouseOver={showHeaderMenuThree}><span>{el}</span></div>)}
        </div>
    );
})

export default HeaderMenuTwo;
