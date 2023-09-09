import React,{useState} from 'react';
import { MAX_STEP_COUNT,MIN_STEP_COUNT, STEP_COUNT } from '../global.constants';

const MeasureSleep = ({selcetdRange, setSelectedRange}) => {
    const handleSelectedRange = (e) => {
        const {value} = e?.target;
        setSelectedRange(value);
    }
    return (
        <div className='row row-cols-12 gap-2 justify-content-center align-items-center my-card p-1'> 
            <div className="col-12">
                <p className='text-center fs-6 fw-bolder p-1 m-0'>1. How was your sleep today</p>
            </div>
            <div className="col-12 range-selector">
                <div className='row row-cols-12 align-items-center justify-content-center'>
                    <div className="col-12 circle d-flex flex-column justify-content-center">
                     <div className="outer-circle p-2 d-flex flex-column justify-content-center align-items-center p-1">
                        <div 
                          className="inner-circle d-flex flex-column justify-content-center align-items-center"
                          style={{ background: `conic-gradient(#03fcc6, ${selcetdRange * 36}deg, #fff 0deg)`}}
                        >
                            <div className="fw-bolder fs-4 range-value" role="contentinfo">{selcetdRange}</div>
                        </div>
                    </div>
                    </div>
                    <div className="row row-cols-12 align-items-center justify-content-center">
                    <div className="col-12 rang-selector-input d-flex justify-content-center">
                        <input type="range" value={selcetdRange} className="range-input" role="meter" step={STEP_COUNT} min={MIN_STEP_COUNT} max={MAX_STEP_COUNT} onChange={handleSelectedRange}/>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export  default MeasureSleep;