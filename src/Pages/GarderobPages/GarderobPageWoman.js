import React from 'react';
import HeaderMenu from "../../Components/HeaderMenu/headerMenu";
import Button from "../../Components/Button/Button";
import HeaderMenuTwo from "../../Components/HeaderMenu/HeaderMenuTwo/headerMenuTwo";
import Slider from "../../Components/Slider/slider";


const GarderobPageWoman = (props) => {
    // const styles = {
    //         woman : {
    //             background: "pink",
    //             height: "90vh"
    //         },
    //         man : {
    //             background: "black",
    //             height: "90vh"
    //         }
    //
    //     }
    return (
        <div style={{position : "relative"}}>
            {/*<div style={{position : "absolute", zIndex : 10}} className="col-lg-12 p-0">*/}
            <HeaderMenu/>
            {/*</div>*/}
            {/*<div className="vh-100">*/}
            <Slider photos={["bg-warning"]}/>
            {/*</div>*/}
        </div>
    );
}

export default GarderobPageWoman;
