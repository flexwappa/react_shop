import React from 'react';
import GoodsCard from "../GoodsCard/GoodsCard";
import style from "./headerMenuThreeStyle.module.css";

const HeaderMenuThree = ({unshowHeaderMenuThree, clas}) => {
    const OpacityBackground = {
        background : "rgba(0,0,0,.3)",
        position:"absolute",
        top: "13.7%",
        left : 0,
        right : 0,
        bottom : 0,
        zIndex: 1
    }
    return (
        <div style={OpacityBackground} className={`${style.wrapper}`}>
            <div onMouseLeave={unshowHeaderMenuThree} className={`row col-lg-10 ml-0 justify-content-around align-items-center h-50 rounded-bottom`}>
                <GoodsCard text={"Куртки"} photo={"green"}/>
                <GoodsCard text={"Костюмы"} photo={"red"}/>
                <GoodsCard text={"Спортивные Костюмы"} photo={"violet"}/>
                <GoodsCard text={"Джинсы"} photo={"yellow"}/>
            </div>
        </div>
    );
}

export default HeaderMenuThree;
