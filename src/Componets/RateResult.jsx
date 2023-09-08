import React from 'react';

const RateYourSelf = ({qualityText}) => {
  return (
    <div className="text-center fs-3 quality m-2 fw-bold">
        <blockquote>&ldquo;{qualityText}&rdquo;</blockquote>
     </div>
  )
}

export default RateYourSelf;