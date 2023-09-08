import React, { useState } from 'react';

const SleepLevel = ({selectedLevel, setSelectedLevel}) => {
    const handleSetLevel = (e) => {
        const {level} = e?.target?.dataset;
        setSelectedLevel(level);
    }
    const getResults = () => {
        if(selectedLevel <= 2) {
            return 'Lazy'
        }
        else if(selectedLevel <=4) {
            return 'Feeling Great'
        } 
        else return 'Very Active'
    }
    return (
    <div className="row row-cols-12 justify-content-center align-items-center my-card p-1">
    <div className="col-12">
           <p className='fs-6 fw-bolder p-1 m-0'>2. How do you feel today after sleep</p>
    </div> 
    <div className="col-12 sleep-leveler">
        <div className="poylgon result"><p className="text-center text-white fw-bolder">{getResults()}</p></div>
        <div className="poylgon" data-level={5} onClick={handleSetLevel} style={{backgroundColor: selectedLevel >= 5 ? '#03fcc6 ': ' #dfcecee6' }}></div>
        <div className="poylgon" data-level={4} onClick={handleSetLevel} style={{ backgroundColor: selectedLevel >= 4 ? '#03fcc6 ': ' #dfcecee6' }}></div>
        <div className="poylgon" data-level={3} onClick={handleSetLevel} style={{ backgroundColor: selectedLevel >= 3 ? '#03fcc6 ': ' #dfcecee6' }}></div>
        <div className="poylgon" data-level={2} onClick={handleSetLevel} style={{ backgroundColor: selectedLevel >= 2 ? '#03fcc6 ': ' #dfcecee6' }}></div>
        <div className="poylgon" data-level={1} onClick={handleSetLevel} style={{ backgroundColor: selectedLevel >= 1 ? '#03fcc6 ': ' #dfcecee6' }}></div>
    </div>

   </div>    

     )
}

export default SleepLevel