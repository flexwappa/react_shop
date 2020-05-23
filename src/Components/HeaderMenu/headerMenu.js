import React from 'react';
import Logo from "../Logo/logo";
import style from "./headerMenuStyle.module.css";
import HeaderMenuTwo from "./HeaderMenuTwo/headerMenuTwo";
import HeaderMenuThree from "../HeaderMenuThree/headerMenuThree";
import Cart from "./Cart/cart";

class HeaderMenu extends React.PureComponent {
    state = {
        headerMenuTwo: {
            // active : false,
            gender: "woman",
        },
        headerMenuThree: {
            active : false,
            // gender: "woman",
        }

    }
    showHeaderMenuTwo = (event) => {
        const id = event.target.id
        // console.log(this.state.headerMenuTwo.gender)
        this.setState(({headerMenuTwo}) => {
            return {headerMenuTwo: {gender: id}}
        })
    }

    showHeaderMenuThree = (event) => {
        // event.stopPropagation()
        console.log("HELLO")
        this.setState(({headerMenuThree}) => {
            return {headerMenuThree: {active: true}}
        })
    }

    unshowHeaderMenuThree = (event) => {
        // console.log(event.target)
        this.setState(({headerMenuTwo}) => {
            return {headerMenuThree: {active: false}}
        })
    }

    render() {
        const {headerMenuTwo: {gender}, headerMenuThree : {active}} = this.state
        const genderArray = [{id :"woman", text: "Женское"}, {id :"man", text: "Мужское"}]
        return (
            <div className={style.wrapper}>
                <div className={`${style.headerOneWrapper}`}>
                    <Logo/>
                    <div className={style.genderWrapper}>
                        {genderArray.map(el => {
                            return (<div key={el.id} id={el.id}
                                         onClick={this.showHeaderMenuTwo}
                                         className={`${style.gender} ${gender === el.id? style.active : null}`}>
                                        <a>{el.text}</a>
                                    </div>
                            )
                        })}
                    </div>
                    <form className={`${style.formWrapper}`}>
                        <input type="search" placeholder="Искать"/>
                        <i className="fa fa-search"></i>
                    </form>
                    <div className={`${style.iconsWrapper}`}>
                        {[0, 1].map(el => <Cart key={el} id={el}/>)}
                    </div>
                </div>
                <HeaderMenuTwo unshowHeaderMenuThree={this.unshowHeaderMenuThree} showHeaderMenuThree={this.showHeaderMenuThree} gender={gender}/>
                {/*<HeaderMenuThree unshowHeaderMenuThree={this.unshowHeaderMenuThree} gender={gender}/>*/}
                {active ? <HeaderMenuThree unshowHeaderMenuThree={this.unshowHeaderMenuThree} gender={gender}/> : null}
            </div>
        );
    }
}

export default HeaderMenu;
