import React from 'react';
import style from "./NavigationStyle.module.css";
import DropdownBlock from "../DropdownBlock/dropdownBlock";

class Navigation extends React.PureComponent {
    state = {
        active : false
    }

    dropDown = (event) => {
        this.setState(({active}) => {
            return {active: true}
        })
    }
    undropDown = (event) => {
        this.setState(({active}) => {
            return {active: false}
        })
    }


    render() {
        const {gender, showHeaderMenuThree, unshowHeaderMenuThree} = this.props
        const {active} = this.state
        const menuTextArray = ["Одежда", "Обвуь", "Аксессуары"]
        return (
            <div className={`${style.wrapper} ${style[gender]}`}>
                {menuTextArray.map(el => <div className={style.chooseBtn} style={{position: "relative"}} key={el} onMouseLeave={this.undropDown} onMouseOver={this.dropDown}>
                    <span>{el}</span>
                    <DropdownBlock active={active}/>
                </div>)}
            </div>
        );
    }
}

export default Navigation;
