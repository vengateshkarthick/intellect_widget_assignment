import React, { useState,useMemo } from 'react';
import Intro from './Intro';
import IntroAntexity from './IntroAntexity';
import MeasureSleep from './MeasureSleep';
import RateYourSelf from './RateResult';
import SleepLevel from './SleepLevel';

const AccessWellBeing  = () =>  {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [selectedRange, setSelectedRange] = useState(0);
  const [qualityOfSleep, rank] = useMemo(() => {
    let range = ["Rating yourself will give a better understanding..", 0]
    if (selectedLevel && selectedRange ) {
      
       if(selectedRange <=5 || selectedLevel <=2  ) range = ["Ohoo kindly consult your doctor", -1] 
       else if (selectedRange <= 7 || selectedLevel <=4 ) range = ["Listening to good music will still increase your sleep quality", 1]
       else if (selectedRange>=8 || selectedLevel === 5)range = ["Nice to hear from you keep it up !", 2]
    }
    return range;
  },[selectedLevel, selectedRange])

  return (
    <div className="well-being">
        <IntroAntexity />
        <Intro />
        <RateYourSelf qualityText={qualityOfSleep} rank={rank} />
        <div className="row row-cols-12">
          <div className="col-6">
             <MeasureSleep selcetdRange={selectedRange} setSelectedRange={setSelectedRange}/>
          </div>
          <div className="col-6">
             <SleepLevel selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
          </div>
        </div>
    </div>
  )
}

export default AccessWellBeing;