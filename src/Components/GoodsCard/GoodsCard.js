import React from 'react';
import Button from "../Button/Button";

const GoodsCard = (props) => {
    const CardStyles = {

    }

  return (
     <div style={{background : `${props.photo}`}} className="col-lg-2 d-flex justify-content-center align-items-center h-50 border border-dark rounded-lg p-0">
       <button className="btn btn-success btn-sm">{props.text}</button>
     </div>
  );
}

export default GoodsCard;
