import React from 'react';
import Logo from "../Logo/logo";
import style from "./headerMenuStyle.module.css";
import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/cart";
import Button from "./Button/button";
import dropDownHoc from "../HOC/hoc";

class HeaderMenu extends React.PureComponent {
    state = {
        activeBtn : "woman"
    }
    // renderItems = (arr) => {
    //     arr.map(el =
    // }

    render() {
        const withHoc = dropDownHoc(Cart)
        const {activeBtn} = this.state
        const buttonConfiguration = [{id :"woman", text: "Женское"}, {id :"man", text: "Мужское"}]
        return (
            <div className={style.wrapper}>
                <div className={`${style.header}`}>
                    <Logo/>
                    {buttonConfiguration.map(el => <Button id={el.id} text={el.text} active={activeBtn === el.id ? true : false}/>)}
                    <form className={`${style.formWrapper}`}>
                        <input type="search" placeholder="Искать"/>
                        <i className="fa fa-search"></i>
                    </form>
                    {/*{withHoc}*/}
                    {dropDownHoc(Cart, 1)}
                    {/*{[0, 1].map(el => dropDownHoc(Cart, {id : el}) )}*/}
                    {/*{[0, 1].map(el => <Cart key={el} id={el}/>)}*/}
                </div>
                <Navigation gender={activeBtn}/>
            </div>
        );
    }
}

export default HeaderMenu;
