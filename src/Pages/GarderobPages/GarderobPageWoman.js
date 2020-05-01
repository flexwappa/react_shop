import React from 'react';
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import GoodsNavigation from "../../Components/GoodsNavigation/GoodsNavigation";
import Slider from "../../Components/Slider/Slider";


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
            <div style={{position : "absolute", zIndex : 10}} className="col-lg-12 p-0">
            <Header/>
            <GoodsNavigation/>
            </div>
            <div className="vh-100">
            <Slider photos={["bg-warning"]}/>
            </div>
        </div>
    );
}

export default GarderobPageWoman;
