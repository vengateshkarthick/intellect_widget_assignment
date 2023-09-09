import React from 'react';

const RateYourSelf = ({qualityText, rank}) => {
  const btnColor = {
    1: "secondary",
    2: "success",
    "-1": "danger",
    0: "light"
  } 
  return (
    <div className="text-center fs-3 quality m-2 fw-semibold d-flex align-items-center justify-content-center w-auto">
        <blockquote role="contentinfo" className={`btn btn-${btnColor[rank]} border p-2 fw-bold`}>&nbsp;{qualityText}&nbsp;</blockquote>
     </div>
  )
}

export default RateYourSelf;