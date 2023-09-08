import React, { useState,useMemo } from 'react';
import Intro from './Intro';
import IntroAntexity from './IntroAntexity';
import MeasureSleep from './MeasureSleep';
import RateYourSelf from './RateResult';
import SleepLevel from './SleepLevel';

const AccessWellBeing  = () =>  {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [selectedRange, setSelectedRange] = useState(0);
  const qualityOfSleep = useMemo(() => {
    let range = "Rating yourself will give a better understanding.."
    if (selectedLevel && selectedRange ) {
      
       if(selectedRange <=5 || selectedLevel <=2  ) range = "Ohoo kindly consult your doctor" 
       else if (selectedRange <= 7 || selectedLevel <=4 ) range = "Listening to good music will still increase your sleep quality"
       else if (selectedRange>=8 || selectedLevel === 5)range = "Nice to hear from you keep it up !"
    }
    return range;
  },[selectedLevel, selectedRange])

  return (
    <div className="well-being">
        <IntroAntexity />
        <Intro />
        <MeasureSleep selcetdRange={selectedRange} setSelectedRange={setSelectedRange}/>
        <SleepLevel selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
        <RateYourSelf qualityText={qualityOfSleep}/>
    </div>
  )
}

export default AccessWellBeing;