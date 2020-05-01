import React from 'react';
import GoodsCard from "../GoodsCard/GoodsCard";

const GoodsNavigationActive = (props) => {
    const OpacityBackground = {
        background : "rgba(0,0,0,.3)",
        position:"absolute",
        top : 0,
        left : 0,
        right : 0,
        bottom : 0
    }
    return (
        <div style={OpacityBackground} className="d-flex justify-content-center">
            <div className="row col-lg-10 ml-0 bg-light justify-content-around align-items-center h-50 rounded-bottom border border-dark">
                <GoodsCard text={"Куртки"} photo={"green"}/>
                <GoodsCard text={"Костюмы"} photo={"red"}/>
                <GoodsCard text={"Спортивные Костюмы"} photo={"violet"}/>
                <GoodsCard text={"Джинсы"} photo={"yellow"}/>
            </div>
        </div>
    );
}

export default GoodsNavigationActive;
