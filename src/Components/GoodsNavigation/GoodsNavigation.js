import React from 'react';

function GoodsNavigation() {
    return (
        <div className="row col-lg-12 p-2 bg-secondary rounded-bottom d-flex justify-content-center ml-0">
            <div className="col-lg-7 d-flex justify-content-between">
                <button className="btn col-lg-3 border btn-success">
                    <h5>Одежда</h5>
                </button>
                <button className="btn col-lg-3 border btn-danger">
                    <h5>Обвуь</h5>
                </button>
                <button className="btn col-lg-3 border btn-warning">
                    <h5>Аксессуары</h5>
                </button>
            </div>
        </div>
    );
}

export default GoodsNavigation;
