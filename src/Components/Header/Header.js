import React from 'react';
import Logo from "../Logo/Logo";

const Header = (props) => {
    const active = {
        background: "#6C757D"
    }
    return (
            <div className="row col-lg-12 bg-dark p-2 justify-content-around ml-0">
            <Logo/>
                <button style={active} className="btn col-lg-2 border btn-dark text-white"><h5>Женское</h5></button>
                <button className="btn col-lg-2 border btn-dark text-white"><h5>Мужское</h5></button>
            <div className="col-lg-6 d-flex justify-content-between p-0">
                <form className="form-inline pr-3 pl-3 col-lg-8 p-0 justify-content-around border-left border-right">
                    <input className="form-control col-lg-8" type="search" placeholder="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                </form>
                <div className="col-lg-4 d-flex justify-content-around p-0 ml-2">
                    <button className="btn btn-sm border text-white btn-info">Корзина</button>
                    <button className="btn btn-sm border text-white btn-primary">Мой профиль</button>
                </div>
            </div>
            </div>
    );
}

export default Header;

{/*<button className="navbar-toggler bg-light" type="button">*/
}
{/*    <span className="navbar-toggler-icon"></span>*/
}
{/*</button>*/
}