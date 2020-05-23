import React from 'react';
import style from "./cartStyle.module.css";

class Cart extends React.PureComponent {
    state = {
        active : false
    }

    dropDown = (event) => {
        this.setState(({active}) => {
            return {active: true}
        })
    }
    render() {
        const {active} = this.state
        const {id} = this.props
        const iconClassObject = {0 : "fa-shopping-cart", 1: "fa-user-circle"}
        const modal = <div className={`${style.modal} ${active ? style.active : null}`}>Личный кабинет</div>
        return (
            <div onMouseOver={this.dropDown} className={`${style.wrapper}`}>
                <i className={`fa ${iconClassObject[id]}`}/>
                {modal}
                {/*{this.state.active ? modal : null}*/}
            </div>
        );
    }
}

export default Cart;
