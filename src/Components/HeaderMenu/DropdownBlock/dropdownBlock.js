import React from 'react';
import style from "./DropdownBlockStyle.module.css";

class DropdownBlock extends React.PureComponent {
    render() {
        const {active} = this.props
        // const modal = <div className={`${style.modal} ${active ? style.active : null}`}>Личный кабинет</div>
        return (
            <div className={`${style.modal} ${active ? style.active : null} ${style.navigationDropDown}`}>
                <ul>
                    <li>Одежда</li>
                    <li>Одежда</li>
                    <li>Одежда</li>
                    <li>Одежда</li>
                </ul>
            </div>
        );
    }
}

export default DropdownBlock;
