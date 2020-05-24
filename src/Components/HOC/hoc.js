import React, {Component} from 'react';
import style from "./cartStyle.module.css";
const dropDownHoc = (Component, id) => {

    class DropDownComponent extends React.PureComponent {
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
            return <Component id={id} active={this.state.active} dropDown={this.dropDown} undropDown={this.undropDown} />
        }
    }

    return <DropDownComponent/>
}

export default dropDownHoc;
