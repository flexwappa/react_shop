import React from 'react';
import Logo from "../Logo/Logo";

const Header = (props) => {
    return (
            <div className="row col-lg-12 bg-dark p-2 justify-content-around ml-0">
            <Logo/>
            <div className="col-lg-10 d-flex justify-content-between p-0">
                <div className="col-lg-3 d-flex justify-content-around p-0 mr-3">
                    <button className="btn m-2 col-lg-6 border btn-dark text-white"><h5>Женское</h5></button>
                    <button className="btn m-2 col-lg-6 border btn-dark text-white"><h5>Мужское</h5></button>
                </div>
                <form className="form-inline col-lg-6 p-0 justify-content-around border-left border-right">
                    <input className="form-control col-lg-9" type="search" placeholder="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                </form>
                <div className="col-lg-3 d-flex justify-content-around p-0 ml-2">
                    <button className="btn border text-white btn-info">Корзина</button>
                    <button className="btn border text-white btn-primary">Мой профиль</button>
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