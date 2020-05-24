import React from 'react';
import style from "./cartStyle.module.css";
import dropDownHoc from "../../HOC/hoc";

class Cart extends React.PureComponent {
    
    // const withState = dropDownHoc()
    // state = {
    //     active : false
    // }
    //
    // dropDown = (event) => {
    //     this.setState(({active}) => {
    //         return {active: true}
    //     })
    // }
    // undropDown = (event) => {
    //     this.setState(({active}) => {
    //         return {active: false}
    //     })
    // }
    render() {
        // const {active} = this.state
        const {id, dropDown, undropDown, active} = this.props
        const iconClassObject = {0 : "fa-shopping-cart", 1: "fa-user-circle"}
        const modal = <div className={`${style.modal} ${active ? style.active : null}`}>Личный кабинет</div>
        return (
            <div onMouseOver={dropDown} onMouseLeave={undropDown} className={`${style.wrapper}`}>
                <i className={`fa ${iconClassObject[id]}`}/>
                {modal}
                {/*{this.state.active ? modal : null}*/}
            </div>
        );
    }
}

export default Cart;
