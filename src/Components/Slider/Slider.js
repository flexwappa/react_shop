import React from 'react';

const Slider = (props) => {
  return (
     <div className="col-log-12 h-100">
         {props.photos.map( (el, index) => {
             return (
                 <div className={`col-lg-12 h-100 d-flex justify-content-center align-items-center ${el}`}>
                    <h1>{`Фото №${++index}`}</h1>
                 </div>
             )
         })}
     </div>
  );
}

export default Slider;
